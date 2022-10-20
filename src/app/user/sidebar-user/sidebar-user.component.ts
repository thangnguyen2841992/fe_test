import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';
import {LessonService} from '../../service/lesson/lesson.service';
import {Lesson} from '../../model/lesson';
import {Router} from '@angular/router';
import {TestService} from '../../service/test/test.service';
import {Test} from '../../model/test';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  books: Book[];
  lessons: Lesson[];
  bookId: number;
  tests: Test[] = [];
  showLesson = false;

  constructor(private bookService: BookService,
              private lessonService: LessonService,
              private router: Router,
              private testService: TestService) {
  }

  ngOnInit() {
    this.getAllBook();
    this.getAllTest();
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe((data) => {
      this.books = data;
    });
  }

  showAllLessonOfBook(id: number) {
    this.bookId = id;
    this.getAllLessonOfBook(id);
    this.showLesson = !this.showLesson;
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



  getAllTest() {
    this.testService.getAllTest().subscribe((data) => {
      this.tests = data;
    });
  }

  reloadComponentTest(testId: number) {
    const currentUrl = `/home/test/${testId}`;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
