import {Component, OnInit} from '@angular/core';
import {GrammarService} from '../../service/grammar/grammar.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../model/book';
import {Lesson} from '../../model/lesson';

@Component({
  selector: 'app-grammar-create',
  templateUrl: './grammar-create.component.html',
  styleUrls: ['./grammar-create.component.css']
})
export class GrammarCreateComponent implements OnInit {
  currentUserId: number;
  bookDefault: Book = {
    id: 1,
    name: '',
    author: ''
  };
  lessonDefault: Lesson;
  grammarForm: FormGroup = new FormGroup({
    bookId: new FormControl(this.bookDefault.id, [Validators.required]),
    lessonId: new FormControl(this.lessonDefault, [Validators.required]),
    situatation: new FormControl('', [Validators.required]),

    explain: new FormControl('', [Validators.required]),

    example: new FormControl('', [Validators.required])
  });

  constructor(private grammarService: GrammarService) {
  }

  ngOnInit() {
  }

}
