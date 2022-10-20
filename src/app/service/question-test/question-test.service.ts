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
  getCountCorrectAnswer(testId: number, listAnswer): Observable<number> {
    return this.http.post<number>(`${API_URL}/getCountCorrectAnswer/test/${testId}`, listAnswer);
  }
  findQuestionTest1DTOByQuestionTest1Id(questionTest1Id: number): Observable<QuestionTest1Dto> {
    return this.http.get<QuestionTest1Dto>(`${API_URL}/findQuestionTest1DTOByQuestionTest1Id/questionTest1/${questionTest1Id}`);
  }
  deleteQuestionTest1(questionTest1Id: number) {
    return this.http.delete(`${API_URL}/deleteQuestionTest1/questionTest1/${questionTest1Id}`);
  }
  findQuestionTest(questionTestId: number): Observable<QuestionTest> {
    return this.http.get<QuestionTest>(`${API_URL}/findQuestionTest/questionTest/${questionTestId}`);
  }
  editQuestionTest(questionTestId: number, questionTestForm): Observable<QuestionTest> {
    return this.http.put(`${API_URL}/editQuestionTest/questionTest/${questionTestId}`, questionTestForm);
  }
  editQuestionTest1(questionTest1Id: number, questionTest1Form): Observable<any> {
    return this.http.put<any>(`${API_URL}/editQuestionTest1/questionTest1/${questionTest1Id}`, questionTest1Form);
  }
  deleteQuestionTest(questionTestId: number) {
    return this.http.delete(`${API_URL}/deleteQuestionTest/questionTest/${questionTestId}`);
  }
}
