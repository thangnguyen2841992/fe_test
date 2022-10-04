import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeSearch} from '../../model/type-search';

const API_URL = `${environment.apiUrl}/typeSearchs`;

@Injectable({
  providedIn: 'root'
})
export class TypeSearchService {

  constructor(private http: HttpClient) {
  }

  getAllTypeSearch(): Observable<TypeSearch[]> {
    return this.http.get<TypeSearch[]>(`${API_URL}`);
  }
}
