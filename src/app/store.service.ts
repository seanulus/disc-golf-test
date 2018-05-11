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

  getPlayerById(storeId: string) {
    return this.database.object('stores/' + storeId)
  }

  updateItem(localUpdatedItem) {
    var itemEntryInFirebase = this.getPlayerById(localUpdatedItem.$key);
    itemEntryInFirebase.update({title: localUpdatedItem.title,
                                artist: localUpdatedItem.artist,
                                description: localUpdatedItem.description});
  }

}
