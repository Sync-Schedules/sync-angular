import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Shift } from '../../models/shift.model'
import { AuthService } from './../auth.service';

@Injectable({
  providedIn: 'root'
})

export class ShiftService {

  shift: any;
  private url = 'shifts/shifts'

  constructor(private http: HttpClient, private auth: AuthService) { }

  getShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(this.url);
  }

  addShift(shift) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3000/shifts/createshift', shift, {headers: headers})
    return this.http.post('shifts/createshift', shift, { headers: headers })

      .map(res => res.json());
  }

  getShifts() {
    // return this.http.get('http://localhost:3000/shifts/shifts')
    return this.http.get('shifts/shifts')

      .map(res => res.json());
  }

  updateShift(id, body) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.put('http://localhost:3000/shifts/update/'+id,body,{headers:headers})
    return this.http.put('venues/update/' + id, body, { headers: headers })

      .map(res => res.json());
  }
  
  deleteShift(id) {
    // return this.http.delete('http://localhost:3000/shifts/delete/'+id)
    return this.http.delete('shifts/delete/' + id)

      .map(res => res.json());
  } 


}
