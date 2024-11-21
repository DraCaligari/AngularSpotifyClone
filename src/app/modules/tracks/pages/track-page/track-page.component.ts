import {Component, OnInit} from '@angular/core';
import {SectionGenericComponent} from '@shared/components/section-generic/section-generic.component';
import * as jsonData from '../../../../data/tracks.json';
import {TrackModel} from '@core/models/Tracks.model';

@Component({
  selector: 'app-track-page',
  standalone: true,
  imports: [
    SectionGenericComponent
  ],
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})
export class TrackPageComponent implements OnInit {
  mockTracksList:Array<TrackModel> = [];
  constructor() {
  }

  ngOnInit(): void {
    const { data }:any = (jsonData as any).default;
    this.mockTracksList = data;
  }
}
