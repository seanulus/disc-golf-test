import { Component, OnInit } from '@angular/core';
import { PlayerModel } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) { }

  masterPlayerList: PlayerModel[];

  ngOnInit() {
    this.masterPlayerList = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer: PlayerModel) {
    this.router.navigate(['players', clickedPlayer.id]);
  };
}
