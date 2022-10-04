import {Component, Input, OnInit} from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {LessonService} from '../../service/lesson/lesson.service';
import {Book} from '../../model/book';
import {Lesson} from '../../model/lesson';

@Component({
  selector: 'app-book-lesson-banner',
  templateUrl: './book-lesson-banner.component.html',
  styleUrls: ['./book-lesson-banner.component.css']
})
export class BookLessonBannerComponent implements OnInit {
  book: Book = {};
  lesson: Lesson = {};
  @Input() bookId: number;
  @Input() lessonId: number;

  constructor(private bookService: BookService,
              private lessonService: LessonService) {
  }

  ngOnInit() {
    this.getBookByBookId();
    this.getLessonByLessonId();
  }
  getBookByBookId() {
    this.bookService.getBookByBookId(this.bookId).subscribe((data) => {
      this.book = data;
    });
  }
  getLessonByLessonId() {
    this.lessonService.getLessonByLessonId(this.lessonId).subscribe((data) => {
      this.lesson = data;
    });
  }
}
