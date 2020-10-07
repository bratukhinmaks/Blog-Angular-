import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User) {

  }

  setToken() {}

}
