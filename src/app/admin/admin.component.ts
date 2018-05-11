import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerModel } from '../player.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(firstName: string, lastName: string, score: number, scoreArray:  Array<number>) {
    let newPlayer: PlayerModel = new PlayerModel(firstName, lastName, score, scoreArray);
    this.playerService.addPlayer(newPlayer);
  }

}
