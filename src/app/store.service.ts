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

  getItems() {
    return this.stores;
  }

  addItem(newStore: StoreModel) {
    this.stores.push(newStore);
  }

  getItemById(storeId: string) {
    return this.database.object('stores/' + storeId);
  }

  updateItem(localUpdatedItem) {
    var itemEntryInFirebase = this.getItemById(localUpdatedItem.$key);
    itemEntryInFirebase.update({item: localUpdatedItem.item,
                                price: localUpdatedItem.price,
                                description: localUpdatedItem.description,
                                pictureURL: localUpdatedItem.pictureURL});
  }

}
