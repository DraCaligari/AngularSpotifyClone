import { Component } from '@angular/core';
import * as jsonData from '../../../data/tracks.json';
import {TrackModel} from '@core/models/Tracks.model';
import {NgForOf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [
    NgForOf,
    NgTemplateOutlet
  ],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {

  tracks: TrackModel[] = [];

  ngOnInit(): void {
    const {data}: any = (jsonData as any).default;
    this.tracks = data;
    console.log(this.tracks);
  }

}
