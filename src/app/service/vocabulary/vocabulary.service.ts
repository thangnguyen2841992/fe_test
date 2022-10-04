import { Injectable } from '@angular/core';
import {AppComponent} from '../../app.component';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VocabularyDto} from '../../model/vocabulary-dto';
import {Vocabulary} from '../../model/vocabulary';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  constructor(private http: HttpClient) { }

  searchByKey(key: string): Observable<VocabularyDto[]> {
    return this.http.get<VocabularyDto[]>(`${API_URL}/vocabularies/searchByKey?key=${key}`);
  }
  getAllVocabularyOfLessonOfBook(bookId: number, lessonId: number, limit: number, offset: number): Observable<VocabularyDto[]> {
    return this.http.get<VocabularyDto[]>(`${API_URL}/vocabularies/book/${bookId}/lesson/${lessonId}/limit/${limit}/offset/${offset}`);
  }
  getAllVocabularyOfLessonOfBook1(bookId: number, lessonId: number): Observable<VocabularyDto[]> {
    return this.http.get<VocabularyDto[]>(`${API_URL}/vocabularies/book/${bookId}/lesson/${lessonId}`);
  }
  createNewVocabulary(vocabulary: Vocabulary): Observable<Vocabulary> {
    return this.http.post<Vocabulary>(`${API_URL}/vocabularies/create`, vocabulary);
  }
}
