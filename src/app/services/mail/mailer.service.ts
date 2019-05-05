import { Injectable } from '@angular/core';
import { Http, Headers} from "@angular/http";
import { tokenNotExpired, JwtHelper } from "angular2-jwt";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MailerService {

  constructor(private http: Http) { }

  sendEmail(user){
    let data = {user};
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3000/mailer/registration',body,{headers:headers})
    return this.http.post('mailer/registration',body,{headers:headers})

  }


  sendSchedule() {


      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('mailer/sendSchedule', { headers: headers })
  }
}
