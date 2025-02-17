import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { TrackModel } from '@core/models/Tracks.model';
import {ImgBrokenDirective} from '@shared/directives/img-broken.directive';
import {MultimediaService} from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    ImgBrokenDirective,
  ],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = { _id: 0, name: '', cover: '', album: '', url: '' };

  constructor(private  multimediaService: MultimediaService) { }

  ngOnInit() {
    console.log('CardPlayerComponent initialized with track:', this.track);
  }

  sendPlay(track:TrackModel) {

    this.multimediaService.callback.emit(track);
  }
}
