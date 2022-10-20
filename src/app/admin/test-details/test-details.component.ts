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
  questionTest1Id: number;
  questionTestDTO: QuestionTest1Dto = {};
  test: Test = {};
  questionTest1DTOList: QuestionTest1Dto[] = [];
  questionTestForm: FormGroup = new FormGroup({
    note: new FormControl('', [Validators.required]),
    caption: new FormControl('', [Validators.required])
  });
  questionTestFormEdit: FormGroup = new FormGroup({
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
  questionTest1FormEdit: FormGroup = new FormGroup({
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

  getAllQuestionTest1IdReal(id: number) {
    this.questionTest1Id = id;
    console.log(this.questionTest1Id);
  }

  getAllQuestionTest1() {
    this.questionTestService.getAllQuestionTest1(this.testId).subscribe((data) => {
      this.questionTest1DTOList = data;
    });
  }

  findQuestionTest1DTOByQuestionTest1Id(id: number) {
    this.questionTest1Id = id;
    this.questionTestService.findQuestionTest1DTOByQuestionTest1Id(id).subscribe((data) => {
      const answerList = data.answerQuestion1List;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < answerList.length; i++) {
        this.questionTest1FormEdit.patchValue({
          caption: data.question,
          answer1: answerList[0].answer,
          answer2: answerList[1].answer,
          answer3: answerList[2].answer,
          answer4: answerList[3].answer,
          correctAnswer: data.correctAnswer
        });
      }
    });
  }

  deleteQuestion1() {
    this.questionTestService.deleteQuestionTest1(this.questionTest1Id).subscribe(() => {
      this.notificationService.showSuccessMessage('Xoá câu hỏi thành công!');
      this.getAllQuestionTestList();
      this.getAllQuestionTest1();
    });
  }

  findQuestionTest(questionTestId: number) {
    this.questionTestService.findQuestionTest(questionTestId).subscribe((data) => {
      this.questionTestId = questionTestId;
      this.questionTestFormEdit.patchValue({
        note: data.note,
        caption: data.caption
      });
    });
  }

  editQuestionTest() {
    this.questionTestService.editQuestionTest(this.questionTestId, this.questionTestFormEdit.value).subscribe((data) => {
      this.notificationService.showSuccessMessage('Cập nhật câu hỏi thành công!');
      this.getAllQuestionTestList();
      this.getAllQuestionTest1();
    });
  }

  editQuestionTest1() {
    const question1Form = {
      caption: this.questionTest1FormEdit.value.caption,
      answerQuestion1s: [
        {
          answer: this.questionTest1FormEdit.value.answer1
        }
        ,
        {
          answer: this.questionTest1FormEdit.value.answer2
        },
        {
          answer: this.questionTest1FormEdit.value.answer3
        },
        {
          answer: this.questionTest1FormEdit.value.answer4
        }
      ],
      answer: this.questionTest1FormEdit.value.correctAnswer,
    };
    this.questionTestService.editQuestionTest1(this.questionTest1Id, question1Form).subscribe((data) => {
      this.notificationService.showSuccessMessage('Cập nhật nội dung câu hỏi thành công!');
      this.getAllQuestionTestList();
      this.getAllQuestionTest1();
    });
  }

  deleteQuestion() {
    this.questionTestService.deleteQuestionTest(this.questionTestId).subscribe((data) => {
      this.notificationService.showSuccessMessage('Xoá câu hỏi thành công');
      this.getAllQuestionTestList();
      this.getAllQuestionTest1();
    });
  }
}
