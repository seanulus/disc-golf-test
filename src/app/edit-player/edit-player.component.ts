import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerCreator } from '../player-model';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent {
  @Input() childSelectedPlayer: PlayerCreator;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
  constructor() { }

}
