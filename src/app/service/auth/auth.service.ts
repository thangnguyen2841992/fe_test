import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserToken} from '../../model/user-token';
import {map} from 'rxjs/operators';
import {User} from '../../model/user';
const API_URL  = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;
  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(sessionStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  login(username: string, password: string) {
    return this.http.post<any>(API_URL + '/login', {username, password})
      .pipe(map(user => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  logout() {
    sessionStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('login');
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/register', user);
  }
  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }
  isLoggedIn() {
    const currentUser = this.getCurrentUser();
    const loggedIn = !!(currentUser);
    return loggedIn;
  }
}
