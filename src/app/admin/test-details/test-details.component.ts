import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TestService} from '../../service/test/test.service';
import {Test} from '../../model/test';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionTestService} from '../../service/question-test/question-test.service';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  testId: number;
  test: Test = {};
  questionTestForm: FormGroup = new FormGroup({
    note: new FormControl('', [Validators.required]),
    caption: new FormControl('', [Validators.required])
  });

  constructor(private activeRouted: ActivatedRoute,
              private testService: TestService,
              private questionTestService: QuestionTestService,
              private notificationService: NotificationService) {
    this.activeRouted.paramMap.subscribe((paramMap: ParamMap) => {
      this.testId = +paramMap.get('testId');
      this.findById(this.testId);
    });
  }

  ngOnInit() {
  }

  findById(testId: number) {
    this.testService.findById(testId).subscribe((data) => {
      this.test = data;
    });
  }

  createNewQuestionTest() {
    const questionTest = {
      note: this.questionTestForm.value.note,
      caption: this.questionTestForm.value.caption,
      testId: this.testId
    };
    this.questionTestService.createNewQuestionTest(questionTest).subscribe((data) => {
      this.notificationService.showSuccessMessage('Thêm câu hỏi thành công');
    });
  }
}
