import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { StoreModel } from '../store.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [StoreService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: StoreService) { }

  ngOnInit() {
  }

  submitForm(item: string, description: string, price: number, pictureURL: string) {
    let newItem: StoreModel = new StoreModel(item, description, price, pictureURL);
    this.playerService.addItem(newItem);
  }

}
