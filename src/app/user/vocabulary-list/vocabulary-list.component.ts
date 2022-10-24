import {Component, OnInit} from '@angular/core';
import {VocabularyDto} from '../../model/vocabulary-dto';
import {VocabularyService} from '../../service/vocabulary/vocabulary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {LessonService} from '../../service/lesson/lesson.service';
import {Lesson} from '../../model/lesson';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.css']
})
export class VocabularyListComponent implements OnInit {
  vocabularies: VocabularyDto[] = [];
  bookId: number;
  lessonId: number;
  limit = 10;
  offset = 0;
  size = 0;
  page = 1;
  totalPage = 0;
  lesson: Lesson = {};

  constructor(private vocabularyService: VocabularyService,
              private activeRouter: ActivatedRoute,
              private lessonService: LessonService) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.bookId = +paramMap.get('bookId');
      this.lessonId = +paramMap.get('lessonId');
    });
  }

  ngOnInit() {
    this.getLessonById();
    this.getAllVocabularyOfLessonOfBook();
    this.getAllVocabularyOfbook();
  }

  getAllVocabularyOfLessonOfBook() {
    this.vocabularyService.getAllVocabularyOfLessonOfBook(this.bookId, this.lessonId, this.limit, this.offset).subscribe((data) => {
      this.vocabularies = data;
    });
  }

  getAllVocabularyOfbook() {
    this.vocabularyService.getAllVocabularyOfLessonOfBook1(this.bookId, this.lessonId).subscribe((data) => {
      if (data.length % 10 === 0) {
        this.size = data.length / 10 - 10;
        this.totalPage = (data.length / 10 - 10) / 10 + 1;
      }
      if (data.length % 10 !== 0) {
        this.size = (data.length - (data.length % 10));
        this.totalPage = (data.length - (data.length % 10)) / 10 + 1;
      }
      console.log(this.size);
    });
  }

  next() {
    this.offset = this.offset + 10;
    this.page = this.page + 1;
    console.log(this.limit);
    console.log(this.offset);
    this.getAllVocabularyOfLessonOfBook();
  }

  previous() {
    this.offset = this.offset - 10;
    this.page = this.page - 1;
    console.log(this.limit);
    console.log(this.offset);
    this.getAllVocabularyOfLessonOfBook();
  }

  first() {
    this.offset = 0;
    this.page = 1;
    this.getAllVocabularyOfLessonOfBook();
  }

  last() {
    this.offset = this.size;
    this.page = (this.size) / 10 + 1;
    this.getAllVocabularyOfLessonOfBook();
  }
  getLessonById() {
    this.lessonService.getLessonByLessonId(this.lessonId).subscribe((data) => {
      this.lesson = data;
    });
  }
}
