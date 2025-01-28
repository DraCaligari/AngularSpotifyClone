import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {TrackModel} from '@core/models/Tracks.model';
import {MultimediaService} from '@shared/services/multimedia.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [
    NgIf,
    CommonModule
  ],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    name: 'Cancion 1',
    cover: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F759279436',
    album: 'Album 1',
    url: 'http://www.google.com',
    _id: 1
  }

  listObservers$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
      console.log('Recibiendo', response);
    });

    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((observer: Subscription) => {
      observer.unsubscribe();
    });
  }

}
