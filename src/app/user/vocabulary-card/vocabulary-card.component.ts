import {Component, Input, OnInit} from '@angular/core';
import {VocabularyDto} from '../../model/vocabulary-dto';

@Component({
  selector: 'app-vocabulary-card',
  templateUrl: './vocabulary-card.component.html',
  styleUrls: ['./vocabulary-card.component.css']
})
export class VocabularyCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  vocabulary: VocabularyDto;
}
