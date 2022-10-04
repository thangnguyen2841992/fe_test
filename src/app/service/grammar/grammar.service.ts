import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Grammar} from '../../model/grammar';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}/grammars`;

@Injectable({
  providedIn: 'root'
})
export class GrammarService {

  constructor(private http: HttpClient) {
  }

  createNewGrammar(userId: number, bookId: number, lessonId: number, grammar: Grammar): Observable<Grammar> {
    return this.http.post<Grammar>(`${API_URL}/create/user/${userId}/book/${bookId}/lesson/${lessonId}`, grammar);
  }
}
