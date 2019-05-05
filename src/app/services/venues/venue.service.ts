import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { AuthService } from './../auth/auth.service';
import { Venue } from '../../models/venue.model';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  venue: any;

  private url = 'venues/venues'

  constructor(private http: HttpClient, private auth: AuthService) { }

  getVenue(): Observable<Venue[]> {
    return this.http.get<Venue[]>(this.url);
  }

  addVenue(venue) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.post('http://localhost:3000/venues/addVenue', venue, {headers: headers})
    return this.http.post('venues/addVenue', venue, { headers: headers })

      .map(res => res.json());
  }

  updateVenue(id, body) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.put('http://localhost:3000/venues/update/'+id,body,{headers:headers})
    return this.http.put('venues/update/' + id, body, { headers: headers })

      .map(res => res.json());
  }

  deleteVenue(id) {
    // return this.http.delete('http://localhost:3000/venues/venue/'+id)
    return this.http.delete('venues/venue/' + id)
      .map(res => res.json());
  }


}
