import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Vocabulary} from '../../model/vocabulary';
import {VocabularyService} from '../../service/vocabulary/vocabulary.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-by-key',
  templateUrl: './search-by-key.component.html',
  styleUrls: ['./search-by-key.component.css']
})
export class SearchByKeyComponent implements OnInit {
  key: string;
  vocabularies: Vocabulary[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private vocabularyService: VocabularyService) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.key = paramMap.get('key');
      console.log(this.key);
    });
  }

  ngOnInit() {
    this.getAllSearchByKey();
  }
  getAllSearchByKey() {
    this.vocabularyService.searchByKey(this.key).subscribe((data) => {
      this.vocabularies = data;
    });
  }
}
