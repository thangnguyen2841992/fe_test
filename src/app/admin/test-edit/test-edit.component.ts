import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TestService} from '../../service/test/test.service';
import {NotificationService} from '../../service/notification/notification.service';
import {Test} from '../../model/test';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {
  testId: number;
  test: Test = {};
  testForm: FormGroup;
  constructor(private testService: TestService,
              private notificationService: NotificationService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.testId = +paramMap.get('testId');
      this.findTestById(this.testId);
    });
  }

  ngOnInit() {
  }
  findTestById(testId: number) {
    this.testService.findById(testId).subscribe((data) => {
      this.testForm = new FormGroup({
        name: new FormControl(data.name, [Validators.required])
      });
    });
  }
  get name() {
    return this.testForm.get('name');
  }
  editTest() {
    this.testService.editTest(this.testId, this.testForm.value).subscribe((data) => {
      this.notificationService.showSuccessMessage('Thay đổi thành công!');
      this.router.navigateByUrl('/admin/test/list');
    });
  }
  deleteTest() {
    this.testService.deleteTest(this.testId).subscribe((data) => {
      this.notificationService.showSuccessMessage('Xoá bài test thành công!');
      this.router.navigateByUrl('/admin/test/list');
    });
  }
}
