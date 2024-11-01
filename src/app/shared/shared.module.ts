import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {MediaPlayerComponent} from './components/media-player/media-player.component';
import {HeaderUserComponent} from './components/header-user/header-user.component';
import {CardPlayerComponent} from '@shared/components/card-player/card-player.component';
import {SectionGenericComponent} from '@shared/components/section-generic/section-generic.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
  ]
})
export class SharedModule { }
