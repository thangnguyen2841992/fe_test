import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lesson} from '../../model/lesson';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) {
  }

  getAllLessonOfBook(bookId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${API_URL}/lessons/book/${bookId}`);
  }

  getLessonByLessonId(lessonId: number): Observable<Lesson> {
    return this.http.get<Lesson>(`${API_URL}/lessons/lesson/${lessonId}`);
  }
}
