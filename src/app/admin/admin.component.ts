import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { StoreModel } from '../store.model';

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

  submitForm(item: string, description: string, price: number) {
    let newPlayer: StoreModel = new StoreModel(item, description, price);
    this.playerService.addPlayer(newPlayer);
  }

}
