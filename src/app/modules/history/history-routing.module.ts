import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrackPageComponent} from '@modules/tracks/pages/track-page/track-page.component';
import {HistoryPageComponent} from '@modules/history/pages/history-page/history-page.component';

const routes: Routes = [
    {
    path: '',
    component: HistoryPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
