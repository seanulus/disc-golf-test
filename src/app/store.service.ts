import { Injectable } from '@angular/core';
import { StoreModel } from './store.model';
import { PLAYERS } from './mock-players';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StoreService {
  stores: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.stores = database.list('stores');
  }

  getPlayers() {
    return this.stores;
  }

  addPlayer(newStore: StoreModel) {
    this.stores.push(newStore);
  }

  getPlayerById(storeId: number) {
    // for (let i = 0; i < PLAYERS.length - 1; i++) {
    //   if(PLAYERS[i].id === storeId) {
    //     return PLAYERS[i];
    //   }
    // }
  }

}
