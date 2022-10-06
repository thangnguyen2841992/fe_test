import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../../model/book';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

 getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
 }
 getBookByBookId(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/book/${bookId}`);
 }
 createNewBook(bookForm): Observable<Book> {
    return this.http.post<Book>(`${API_URL}/books/create`, bookForm);
 }
}
