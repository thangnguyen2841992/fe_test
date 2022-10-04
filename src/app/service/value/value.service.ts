import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VocabularyDto} from '../../model/vocabulary-dto';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor(private http: HttpClient) {
  }

  searchByKey(key: string): Observable<VocabularyDto[]> {
    return this.http.get<VocabularyDto[]>(`${API_URL}/values/searchByKey?key=${key}`);
  }
}
