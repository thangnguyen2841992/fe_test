import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Lesson} from '../../model/lesson';
import {Book} from '../../model/book';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book/book.service';
import {LessonService} from '../../service/lesson/lesson.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-vocabulary-audio-file-add',
  templateUrl: './vocabulary-audio-file-add.component.html',
  styleUrls: ['./vocabulary-audio-file-add.component.css']
})
export class VocabularyAudioFileAddComponent implements OnInit {
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
  bookId = 1;
  books: Book[] = [];
  lessons: Lesson[] = [];
  vocabularyForm: FormGroup = new FormGroup({
    bookId: new FormControl(this.bookDefault.id, [Validators.required]),
    lessonId: new FormControl(this.lessonDefault.id, [Validators.required]),

    audioFile: new FormControl('')
  });
  audioFile: any;

  constructor(private activeRouted: ActivatedRoute,
              private bookService: BookService,
              private lessonService: LessonService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getAllBook();
    this.getAllLessonOfBook(this.bookId);
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe((data) => {
      this.books = data;
    });
  }

  getAllLessonOfBook(bookId: number) {
    this.lessonService.getAllLessonOfBook(bookId).subscribe((data) => {
      this.lessons = data;
    });
  }

  changeFile(event) {
    this.vocabularyForm.patchValue({
      audioFile: event.target.files[0]
    });
  }


  getBookId(event) {
    this.bookId = event.target.value;
    this.getAllLessonOfBook(this.bookId);
  }

  updateAudioFile() {
    const audioFile = this.getCurrentDateTime() + this.vocabularyForm.get('audioFile');
    const fileRef = this.storage.ref(audioFile);
    this.storage.upload(audioFile, this.vocabularyForm.get('audioFile')).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.audioFile = url;
          const vocabularyAudioFileForm = {
            audioFile: this.audioFile,
          };
          this.lessonService.addVocabularyFileAudio(this.vocabularyForm.value.lessonId, vocabularyAudioFileForm).subscribe(() => {
            this.notificationService.showSuccessMessage('Thêm file nghe từ vựng thành công!');
          });
        });
      })
    ).subscribe();
  }
  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
}
