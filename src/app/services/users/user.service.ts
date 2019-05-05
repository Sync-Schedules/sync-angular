import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../../models/user.model";
import { AuthService } from "../auth/auth.service"

@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

export class UserService {

  authToken: any;
  user: any;
  private url = 'users/users';
  private djUrl = 'users/djs';


  constructor(private http: HttpClient, private auth: AuthService) { }


  authenticateUser(user) {
    return this.http.post('http://localhost:3000/users/authenticate', user, httpOptions)
      // return this.http.post('users/authenticate', user, { headers: headers })
    .map(res => res.json());
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getDJ(): Observable<User[]> {
    return this.http.get<User[]>(this.djUrl);
  }

  registerUser(user) {
    // return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
    return this.http.post('users/register', user, httpOptions)
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.auth.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    // return this.http.get('http://localhost:3000/users/profile', {headers: headers})
    return this.http.get('users/profile', { headers: headers })

      .map(res => res.json());
  }

  getUserList() {
    // return this.http.get('http://localhost:3000/users/usersList')
    return this.http.get('users/usersList')

      .map(res => res.json());
  }

  getDJs() {
    // return this.http.get('http://localhost:3000/users/djs')
    return this.http.get('users/djs')

      .map(res => res.json());
  }

  updateUser(id, body) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.put('http://localhost:3000/users/update/'+id,body,{headers:headers})
    return this.http.put('users/update/' + id, body, { headers: headers })
      .map(res => res.json());
  }

  deleteUser(id) {
    // return this.http.delete('http://localhost:3000/users/user/'+id)
    return this.http.delete('users/user/' + id)
      .map(res => res.json());
  }
}
