import {Component, OnInit} from '@angular/core';
import {QuestionTestService} from '../../service/question-test/question-test.service';
import {QuestionTest1Dto} from '../../model/question-test1-dto';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TestService} from '../../service/test/test.service';
import {Test} from '../../model/test';
import {QuestionTest} from '../../model/question-test';

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

  constructor(private questionTestService: QuestionTestService,
              private activeRouted: ActivatedRoute,
              private testService: TestService
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
}
