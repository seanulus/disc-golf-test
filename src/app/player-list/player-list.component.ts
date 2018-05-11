import { Component, OnInit } from '@angular/core';
import { StoreModel } from '../store.model';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [StoreService]
})
export class StoreListComponent implements OnInit {

  constructor(private router: Router, private storeService: StoreService) { }

  masterStoreList: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.masterStoreList = this.storeService.getPlayers();
  }

  goToDetailPage(clickedPlayer: StoreModel) {
    // this.router.navigate(['stores', clickedPlayer.id]);
  };
}
