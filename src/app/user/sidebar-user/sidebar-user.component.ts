import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';
import {LessonService} from '../../service/lesson/lesson.service';
import {Lesson} from '../../model/lesson';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  books: Book[];
  lessons: Lesson[];
  bookId: number;
  constructor(private bookService: BookService,
              private lessonService: LessonService,
              private router: Router) { }

  ngOnInit() {
    this.getAllBook();
  }
  getAllBook() {
    this.bookService.getAllBook().subscribe((data) => {
      this.books = data;
    });
  }
  showAllLessonOfBook(id: number) {
    this.bookId = id;
    this.getAllLessonOfBook(id);
    console.log(this.bookId);
  }
  getAllLessonOfBook(bookId: number) {
    this.lessonService.getAllLessonOfBook(bookId).subscribe((data) => {
      this.lessons = data;
    });
  }

  getAllVocabularyOfLessonOfBook(bookId: number, lessonId: number) {
      this.router.navigateByUrl(`/home/vocabulary/list/${bookId}/${lessonId}`);
      this.reloadComponent(bookId, lessonId);
  }
  reloadComponent(bookId: number, lessonId: number) {
    const currentUrl = `/home/vocabulary/list/${bookId}/${lessonId}`;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
