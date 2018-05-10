import { Injectable } from '@angular/core';
import { PlayerModel } from './player.model';
import { PLAYERS } from './mock-players';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers() {
    return PLAYERS;
  }
}
