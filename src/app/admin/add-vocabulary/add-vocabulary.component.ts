import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';
import {LessonService} from '../../service/lesson/lesson.service';
import {Lesson} from '../../model/lesson';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {VocabularyService} from '../../service/vocabulary/vocabulary.service';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-add-vocabulary',
  templateUrl: './add-vocabulary.component.html',
  styleUrls: ['./add-vocabulary.component.css']
})
export class AddVocabularyComponent implements OnInit {
  books: Book[] = [];
  lessons: Lesson[] = [];
  bookId = 1;
  lessonDefault: Lesson = {
    id: 1,
    name: '',
    book: {}
  };
  bookDefault: Book = {
    id: 1,
    name: '',
    author: ''
  };
  currentUserId: number;
  vocabularyForm: FormGroup = new FormGroup({
    bookId: new FormControl(this.bookDefault.id, [Validators.required]),
    lessonId: new FormControl(this.lessonDefault.id, [Validators.required]),
    spell: new FormControl('', [Validators.required]),
    hiragana: new FormControl('', [Validators.required]),
    kanji: new FormControl('', [Validators.required]),
    vietnameseChinese: new FormControl('', [Validators.required]),
    translation: new FormControl('', [Validators.required]),
  });

  constructor(private bookService: BookService,
              private lessonService: LessonService,
              private authService: AuthService,
              private vocabularyService: VocabularyService,
              private notificationService: NotificationService) {
    this.currentUserId = this.authService.currentUserValue.id;
    this.getAllLessonOfBookDefault();
  }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe((data) => {
      this.books = data;
    });
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

  createNewVocabulary() {
    const vocabulary = {
      hiragana: this.vocabularyForm.value.hiragana,

      kanji: this.vocabularyForm.value.kanji,

      translation: this.vocabularyForm.value.translation,

      spell: this.vocabularyForm.value.spell,

      vietnameseChinese: this.vocabularyForm.value.vietnameseChinese,

      userId: this.currentUserId,

      bookId: this.vocabularyForm.value.bookId,

      lessonId: this.vocabularyForm.value.lessonId
    };
    this.vocabularyService.createNewVocabulary(vocabulary).subscribe((data) => {
      this.notificationService.showSuccessMessage('Thêm từ vựng thành công!');
    });
  }
}
