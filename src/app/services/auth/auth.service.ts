import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }


  isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return this.jwtHelper.isTokenExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
