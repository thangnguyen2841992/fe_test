import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TestService} from '../../service/test/test.service';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {
  testForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  constructor(private testService: TestService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }

  createNewTest() {
    this.testService.createNewTest(this.testForm.value).subscribe((test) => {
      this.notificationService.showSuccessMessage('Tạo bài kiểm tra thành công!');
    });
  }
}
