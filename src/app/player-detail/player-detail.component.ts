import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoreModel } from '../store.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [StoreService]
})
export class PlayerDetailComponent implements OnInit {
  playerId: number = null;
  playerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: StoreService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = parseInt(urlParameters['id']);
    });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

}
