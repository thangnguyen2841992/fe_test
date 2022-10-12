import { Component, OnInit } from '@angular/core';
import {Test} from '../../model/test';
import {TestService} from '../../service/test/test.service';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  testId: number;
  tests: Test[] = [];
  constructor(private testService: TestService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.getAllTest();
  }
  getAllTest() {
    this.testService.getAllTest().subscribe((tests) => {
      this.tests = tests;
    });
  }

  putToModalDeleteTest(testId: number) {
    this.testId = testId;
  }

  deleteTest() {
    this.testService.deleteTest(this.testId).subscribe((data) => {
      this.notificationService.showSuccessMessage('Xóa bài test thành công!');
      this.getAllTest();
    });
  }
}
