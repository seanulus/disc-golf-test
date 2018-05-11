import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GoogleMapsApiService } from '../google-maps-api.service';


@Component({
  selector: 'app-google-maps-form',
  templateUrl: './google-maps-form.component.html',
  styleUrls: ['./google-maps-form.component.css'],
  providers: [GoogleMapsApiService]
})
export class GoogleMapsFormComponent {
  locations: any[]=null;

  constructor(private googleMapsLocations: GoogleMapsApiService) { }

  getLocation(location: string) {
    this.googleMapsLocations.getByLocation(location).subscribe(response => {
      console.log(response);
        this.locations = response.json();
    });
  }

}
