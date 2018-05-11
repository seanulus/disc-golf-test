import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerCreator } from '../player-model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  @Input() childPlayersList: PlayerCreator[];
  @Output() clickSender = new EventEmitter();
  @Output() scoreSender = new EventEmitter();

  selectedPlayer = null;
  // scoreArray = [];
  filterByName: string = "";


  editPlayerClicked(playerToEdit: PlayerCreator) {
    this.clickSender.emit(playerToEdit);
  }
  //Trying to push score values to an array to be displayed in the table.
  // editScoreClicked(playerToEdit: PlayerCreator[3]) {
  //
  // }
  runName(searchName) {
    this.filterByName = searchName;
  }

  birdie(clickedPlayer) {
    clickedPlayer.score -= 1;
    clickedPlayer.scoreArray.push(2);
    console.log(clickedPlayer.scoreArray);
  }

  par(clickedPlayer) {
    clickedPlayer.score += 0;
    clickedPlayer.scoreArray.push(3);
  }

  bogey(clickedPlayer) {
    clickedPlayer.score += 1;
    clickedPlayer.scoreArray.push(4);
  }

  onChange(optionFromMenu) {
      this.filterByName = optionFromMenu;
  }

  constructor() { }

}
