import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {QuestionTest} from '../../model/question-test';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}/questionTests`;
@Injectable({
  providedIn: 'root'
})
export class QuestionTestService {

  constructor(private http: HttpClient) { }

  createNewQuestionTest(questionTest): Observable<QuestionTest> {
    return this.http.post(`${API_URL}`, questionTest);
  }
}
