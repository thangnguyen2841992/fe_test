import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book/book.service';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    totalLesson: new FormControl('', [Validators.required])
  });

  constructor(private bookService: BookService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  createNewBook() {
    this.bookService.createNewBook(this.bookForm.value).subscribe(() => {
        this.notificationService.showSuccessMessage('Thêm sách thành công!');
    });
  }
}
