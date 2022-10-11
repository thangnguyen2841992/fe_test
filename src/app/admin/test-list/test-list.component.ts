import { Component, OnInit } from '@angular/core';
import {Test} from '../../model/test';
import {TestService} from '../../service/test/test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  tests: Test[] = [];
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getAllTest();
  }
  getAllTest() {
    this.testService.getAllTest().subscribe((tests) => {
      this.tests = tests;
    });
  }
}
