import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: []
})
export class LocationsComponent {
  @Input() childLocations;
  constructor() { }

  ngOnInit() {
  }

}
