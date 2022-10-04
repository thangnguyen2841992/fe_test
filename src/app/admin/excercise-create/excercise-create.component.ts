import {Component, Inject, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {Lesson} from '../../model/lesson';
import {BookService} from '../../service/book/book.service';
import {LessonService} from '../../service/lesson/lesson.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../model/question';
import {$e} from 'codelyzer/angular/styles/chars';
import {NotificationService} from '../../service/notification/notification.service';
import {formatDate} from '@angular/common';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {AuthService} from '../../service/auth/auth.service';
import {ExcerciseService} from '../../service/excercise/excercise.service';

@Component({
  selector: 'app-excercise-create',
  templateUrl: './excercise-create.component.html',
  styleUrls: ['./excercise-create.component.css']
})
export class ExcerciseCreateComponent implements OnInit {
  books: Book[] = [];
  lessons: Lesson[] = [];
  lessonDefault: Lesson;
  bookDefault: Book = {
    id: 1,
    name: '',
    author: ''
  };
  bookId = 1;
  currentUserId: number;
  vocabularyForm: FormGroup = new FormGroup({
    bookId: new FormControl(this.bookDefault.id, [Validators.required]),
    lessonId: new FormControl(this.lessonDefault, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    caption: new FormControl('', [Validators.required]),
  });
  question: string;
  answer: string;
  questions: Question[] = [];
  selectedFile: File;
  audioLink: string;
  lessonId: number;

  constructor(private bookService: BookService,
              private lessonService: LessonService,
              private notificationService: NotificationService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              private authService: AuthService,
              private exerciseService: ExcerciseService
  ) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe((data) => {
      this.books = data;
    });
  }

  getAllLessonOfBook() {
    console.log(this.bookId);
    return this.lessonService.getAllLessonOfBook(this.bookId).subscribe((data) => {
      this.lessons = data;

    });
  }

  getBookId($event) {
    this.bookId = $event.target.value;
    this.getAllLessonOfBook();
  }

  getAllLessonOfBookDefault() {
    return this.lessonService.getAllLessonOfBook(1).subscribe((data) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        this.lessonDefault = {
          id: data[0].id,
          name: data[0].name,
          book: data[0].book
        };
      }
    });
  }

  getQuestion($event) {
    this.question = $event.target.value;
  }

  getAnswer($event) {
    this.answer = $event.target.value;
  }

  createQuestion() {
    const question = {
      question: this.question,
      answer: this.answer
    };
    this.questions.push(question);
    this.notificationService.showSuccessMessage('Thêm câu hỏi thành công');
    this.question = '';
    this.answer = '';
    console.log(this.questions);
  }

  changeFile($event) {
    this.selectedFile = $event.target.files[0];
  }

  createNewVocabulary() {
    const audioFile = this.getCurrentDateTime() + this.selectedFile;
    const fileRef = this.storage.ref(audioFile);
    this.storage.upload(audioFile, this.selectedFile).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.audioLink = url;
          console.log(this.audioLink);
        });
      })
    ).subscribe();
    const excerciseForm = {
      name: this.vocabularyForm.value.name,

      caption: this.vocabularyForm.value.caption,

      audioFile: this.audioLink,

      userId: this.currentUserId,

      bookId: this.vocabularyForm.value.bookId,

      lessonId: this.vocabularyForm.value.lessonId,

      questions: this.questions
    };
    this.exerciseService.createNewQuestion(excerciseForm, this.currentUserId, this.bookId, this.lessonId).subscribe(() => {
      this.notificationService.showSuccessMessage('Tạo bài tập thành công!');
    });
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
}
