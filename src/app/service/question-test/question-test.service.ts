import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {QuestionTest} from '../../model/question-test';
import {Observable} from 'rxjs';
import {QuestionTest1Dto} from '../../model/question-test1-dto';
const API_URL = `${environment.apiUrl}/questionTests`;
@Injectable({
  providedIn: 'root'
})
export class QuestionTestService {

  constructor(private http: HttpClient) { }

  createNewQuestionTest(questionTest): Observable<QuestionTest> {
    return this.http.post(`${API_URL}`, questionTest);
  }
  getAllQuestionTestOfTest(testId: number): Observable<QuestionTest[]> {
    return this.http.get<QuestionTest[]>(`${API_URL}/test/${testId}`);
  }
  createNewQuestionTest1(questionTestForm): Observable<QuestionTest> {
    return this.http.post(`${API_URL}/createQuestionTest1`, questionTestForm);
  }
  getAllQuestionTest1(testId: number): Observable<QuestionTest1Dto[]> {
    return this.http.get<QuestionTest1Dto[]>(`${API_URL}/getAllQuestionTest1/test/${testId}`);
  }
}
