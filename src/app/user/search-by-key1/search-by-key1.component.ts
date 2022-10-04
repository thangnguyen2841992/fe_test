import { Component, OnInit } from '@angular/core';
import {Vocabulary} from '../../model/vocabulary';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {VocabularyService} from '../../service/vocabulary/vocabulary.service';
import {ValueService} from '../../service/value/value.service';

@Component({
  selector: 'app-search-by-key1',
  templateUrl: './search-by-key1.component.html',
  styleUrls: ['./search-by-key1.component.css']
})
export class SearchByKey1Component implements OnInit {
  key: string;
  vocabularies: Vocabulary[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private valueService: ValueService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.key = paramMap.get('key');
  });
  }
  ngOnInit() {
    this.getAllSearchByKey();
  }
  getAllSearchByKey() {
    this.valueService.searchByKey(this.key).subscribe((data) => {
      this.vocabularies = data;
    });
  }
}
