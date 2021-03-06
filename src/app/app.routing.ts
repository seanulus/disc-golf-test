import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { AdminComponent } from './admin/admin.component';
import { PlayerComponent } from './player/player.component';
import { GoogleMapsFormComponent } from './google-maps-form/google-maps-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'store-list',
    component: StoreListComponent
  },
  {
    path: 'stores/:id',
    component: StoreDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'player-list',
    component: PlayerComponent
  },
  {
    path: 'google-maps',
    component: GoogleMapsFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
