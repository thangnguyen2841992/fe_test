import { Component, OnInit } from '@angular/core';
import {ExcerciseDto} from '../../model/excercise-dto';
import {ExcerciseService} from '../../service/excercise/excercise.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-excercise-list',
  templateUrl: './excercise-list.component.html',
  styleUrls: ['./excercise-list.component.css']
})
export class ExcerciseListComponent implements OnInit {
  excerciseDTO: ExcerciseDto[] = [];
  bookId: number;
  lessonId: number;
  constructor(private excerciseService: ExcerciseService,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.bookId = +paramMap.get('bookId');
      this.lessonId = +paramMap.get('lessonId');
    });
  }

  ngOnInit() {
    this.getAllExcerciseOfBookOfLesson();
  }
  getAllExcerciseOfBookOfLesson() {
    this.excerciseService.getAllExcerciseOfBookOfLesson(this.bookId, this.lessonId).subscribe((data) => {
      this.excerciseDTO = data;
    });
  }
}
