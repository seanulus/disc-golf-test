import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoreModel } from '../store.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css'],
  providers: [StoreService]
})
export class StoreDetailComponent implements OnInit {
  itemId: string = null;
  itemToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: StoreService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemId = urlParameters['id'];
    });
    this.itemToDisplay = this.playerService.getItemById(this.itemId);
  }

}
