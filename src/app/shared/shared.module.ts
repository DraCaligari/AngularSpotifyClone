import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {MediaPlayerComponent} from './components/media-player/media-player.component';
import {HeaderUserComponent} from './components/header-user/header-user.component';
import {CardPlayerComponent} from '@shared/components/card-player/card-player.component';
import {SectionGenericComponent} from '@shared/components/section-generic/section-generic.component';
import {PlayListHeaderComponent} from '@shared/components/play-list-header/play-list-header.component';
import {PlayListBodyComponent} from '@shared/components/play-list-body/play-list-body.component';
import {ImgBrokenDirective} from '@shared/directives/img-broken.directive';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    ImgBrokenDirective,
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    ImgBrokenDirective,
  ]
})
export class SharedModule { }
