import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Test} from '../../model/test';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}/tests`;
@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) { }


  createNewTest(test: Test): Observable<Test> {
    return this.http.post<Test>(`${API_URL}`, test);
  }
  getAllTest(): Observable<Test[]> {
    return this.http.get<Test[]>(`${API_URL}`);
  }
  findById(testId: number): Observable<Test> {
    return this.http.get<Test>(`${API_URL}/test/${testId}`);
  }
  editTest(testId: number, test: Test): Observable<Test> {
    return this.http.put<Test>(`${API_URL}/edit/test/${testId}`, test);
  }
  deleteTest(testId: number): Observable<Test> {
    return this.http.delete<Test>(`${API_URL}/delete/test/${testId}`);
  }
}
