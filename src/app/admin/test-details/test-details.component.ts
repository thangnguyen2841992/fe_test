import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TestService} from '../../service/test/test.service';
import {Test} from '../../model/test';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionTestService} from '../../service/question-test/question-test.service';
import {NotificationService} from '../../service/notification/notification.service';
import {QuestionTest} from '../../model/question-test';
import {QuestionTest1Dto} from '../../model/question-test1-dto';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  testId: number;
  questionTestId: number;
  test: Test = {};
  questionTest1DTOList: QuestionTest1Dto[] = [];
  questionTestForm: FormGroup = new FormGroup({
    note: new FormControl('', [Validators.required]),
    caption: new FormControl('', [Validators.required])
  });
  questionTestList: QuestionTest[] = [];
  questionTest1From: FormGroup = new FormGroup({
    caption: new FormControl('', [Validators.required]),
    answer1: new FormControl('', [Validators.required]),
    answer2: new FormControl('', [Validators.required]),
    answer3: new FormControl('', [Validators.required]),
    answer4: new FormControl('', [Validators.required]),
    correctAnswer: new FormControl('', [Validators.required])
  });
  count: number;
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
    this.getAllQuestionTestList();
    this.getAllQuestionTest1();
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
      this.questionTestForm.reset();
      this.getAllQuestionTestList();
    });
  }

  getAllQuestionTestList() {
    this.questionTestService.getAllQuestionTestOfTest(this.testId).subscribe((data) => {
      this.questionTestList = data;
    });
  }

  createNewQuestionTest1() {
    const question1Form = {
      caption: this.questionTest1From.value.caption,
      answerQuestion1s: [
        {
          answer: this.questionTest1From.value.answer1
        }
        ,
        {
          answer: this.questionTest1From.value.answer2
        },
        {
          answer: this.questionTest1From.value.answer3
        },
        {
          answer: this.questionTest1From.value.answer4
        }
      ],
      answer: this.questionTest1From.value.correctAnswer,

      testId: this.testId,

      questionTestId: this.questionTestId
    };
    this.questionTestService.createNewQuestionTest1(question1Form).subscribe((data) => {
      this.notificationService.showSuccessMessage('Thêm nội dung câu hỏi thành công!');
      this.questionTest1From.reset();
      this.getAllQuestionTest1();
    });
  }

  getQuestionTest1Id(id: number) {
    this.questionTestId = id;
  }

  getAllQuestionTest1() {
    this.questionTestService.getAllQuestionTest1(this.testId).subscribe((data) => {
      this.questionTest1DTOList = data;
    });
  }

}
