import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrackPageComponent} from '@modules/tracks/pages/track-page/track-page.component';
import {FavoritePageComponent} from '@modules/favorites/pages/favorite-page/favorite-page.component';

const routes: Routes = [
    {
    path: '',
    component: FavoritePageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
