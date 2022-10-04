import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  key: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }


  getKey($event) {
    this.key = $event;
  }
}
