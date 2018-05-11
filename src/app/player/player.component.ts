import { Component } from '@angular/core';
import { PlayerCreator } from '../player-model'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  title = 'UDisc Live';
  masterPlayerList: PlayerCreator[] = [
    new PlayerCreator('Sean', 'McDermott', 0, []),
    new PlayerCreator('Abigail', 'Wallace', 0, []),
    new PlayerCreator('Walt', 'Whitman', 0, [])
  ]//Empty arrays for attempting to push values from player-list.
  selectedPlayer = null;

  editPlayer(clickedPlayer) {
    this.selectedPlayer = clickedPlayer;
  }

  addPlayer(newPlayer: PlayerCreator) {
    this.masterPlayerList.push(newPlayer);
  }

  finishedEditing() {
    this.selectedPlayer = null;
  }
}
