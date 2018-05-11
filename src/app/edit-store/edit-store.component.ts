import { Component, Input, OnInit } from '@angular/core';
import { StoreModel } from '../store.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css'],
  providers: [StoreService]
})
export class EditStoreComponent implements OnInit {
  @Input() selectedItem;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

}
