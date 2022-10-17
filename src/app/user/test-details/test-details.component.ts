import {Component, OnInit} from '@angular/core';
import {QuestionTestService} from '../../service/question-test/question-test.service';
import {QuestionTest1Dto} from '../../model/question-test1-dto';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TestService} from '../../service/test/test.service';
import {Test} from '../../model/test';
import {QuestionTest} from '../../model/question-test';
import {Form, FormArray, FormControl, FormGroup} from '@angular/forms';
import {ListAnswer} from '../../model/list-answer';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  questionTest1DTOList: QuestionTest1Dto[] = [];
  test: Test = {};
  testId: number;
  questionTestList: QuestionTest[] = [];
  listAnswer: string[] = [];
  count: number;
  listAnswer1: ListAnswer;

  constructor(private questionTestService: QuestionTestService,
              private activeRouted: ActivatedRoute,
              private testService: TestService,
              private notificationService: NotificationService
  ) {
    this.activeRouted.paramMap.subscribe((paramMap: ParamMap) => {
      this.testId = +paramMap.get('testId');
      this.findById(this.testId);
    });
  }

  ngOnInit() {
    this.getAllQuestionTest1DTO();
    this.getAllQuestionTestOfTest();
  }

  findById(testId: number) {
    this.testService.findById(testId).subscribe((data) => {
      this.test = data;
    });
  }

  getAllQuestionTest1DTO() {
    this.questionTestService.getAllQuestionTest1(this.testId).subscribe((data) => {
      this.questionTest1DTOList = data;
    });
  }

  getAllQuestionTestOfTest() {
    this.questionTestService.getAllQuestionTestOfTest(this.testId).subscribe((data) => {
      this.questionTestList = data;
    });
  }

  getListAnswer(event) {
    this.listAnswer.push('' + event.target.value);
    console.log(this.listAnswer);
  }

  getCountCorrectAnswer() {
    const listAnswerRequest =  {
      listAnswer: this.listAnswer
    };
    this.questionTestService.getCountCorrectAnswer(this.testId, listAnswerRequest).subscribe((data) => {
      this.count = data;
      this.notificationService.showSuccessMessage('Bạn đã trả lời đúng ' + this.count + '/' + this.listAnswer.length + ' câu hỏi');
    });
  }
}

