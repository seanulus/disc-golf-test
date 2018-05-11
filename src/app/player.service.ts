import { Injectable } from '@angular/core';
import { StoreModel } from './store.model';
import { PLAYERS } from './mock-players';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  addPlayer(newPlayer: StoreModel) {
    this.players.push(newPlayer);
  }

  getPlayerById(playerId: number) {
    // for (let i = 0; i < PLAYERS.length - 1; i++) {
    //   if(PLAYERS[i].id === playerId) {
    //     return PLAYERS[i];
    //   }
    // }
  }

}
