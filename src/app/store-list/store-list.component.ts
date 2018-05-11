import { Component, OnInit } from '@angular/core';
import { StoreModel } from '../store.model';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
  providers: [StoreService]
})
export class StoreListComponent implements OnInit {

  constructor(private router: Router, private storeService: StoreService) { }

  masterStoreList: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  ngOnInit() {
    this.masterStoreList = this.storeService.getItems();
  }

  goToDetailPage(clickedItem) {
    this.router.navigate(['stores', clickedItem.$key]);
  };
}
