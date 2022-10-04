import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExcerciseDto} from '../../model/excercise-dto';
const API_URL = `${environment.apiUrl}/exercises`;
@Injectable({
  providedIn: 'root'
})
export class ExcerciseService {

  constructor(private http: HttpClient) { }

  createNewQuestion(questionForm: any, userId: number, bookId: number, lessonId: number): Observable<any> {
    return this.http.post(`${API_URL}/create/user/${userId}/book/${bookId}/lesson/${lessonId}`, questionForm);
  }
  getAllExcerciseOfBookOfLesson(bookId: number, lessonId: number): Observable<ExcerciseDto[]> {
    return this.http.get<ExcerciseDto[]>(`${API_URL}/book/${bookId}/lesson/${lessonId}`);
  }
}
