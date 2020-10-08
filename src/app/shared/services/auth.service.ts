import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../models/user.interface';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Subject, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public error$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  login(user: User) {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.API_KEY}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleErrore.bind(this))
      );
  }

  logout() {
    this.setToken(null);
  }

  private handleErrore(error: HttpErrorResponse) {
    const {message} = error.error.error;
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email not found');
        break;
      case 'INVALID_EMAIL':
        this.error$.next('Invalid mail');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid password');
        break;
    }
    return throwError(error);
  }

  isAuth(): boolean {
    return !!this.token;
  }

  setToken(res) {
    if (res) {
      const date = new Date(new Date().getTime() + +res.expiresIn * 1000);
      localStorage.setItem('token', res.idToken);
      localStorage.setItem('token-time', `${date}`);
    } else {
      localStorage.clear();
    }
  }

  get token() {
    const actulaDate = new Date();
    const expdate = new Date(localStorage.getItem('token-time'));
    if (actulaDate > expdate) {
      this.logout();
      return null;
    } else {
      return localStorage.getItem('token');
    }
  }

}
