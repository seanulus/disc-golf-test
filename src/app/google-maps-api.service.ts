import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { apiKey } from './api-keys';

@Injectable()
export class GoogleMapsApiService {

  constructor(private http: Http) { }

  getLocation(location: string) {
    return this.http.get(`https://maps.googleapis.com/maps/api/staticmap?center=${location}&size=600x300&maptype=roadmap&key=${apiKey}`)
  }

}
