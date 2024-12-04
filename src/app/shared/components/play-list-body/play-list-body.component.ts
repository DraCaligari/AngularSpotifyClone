import { Component } from '@angular/core';
import * as jsonData from '../../../data/tracks.json';
import {TrackModel} from '@core/models/Tracks.model';
import {NgForOf, NgTemplateOutlet} from '@angular/common';
import {OrderListPipe} from '@shared/pipe/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [
    NgForOf,
    NgTemplateOutlet,
    OrderListPipe
  ],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {

  tracks: TrackModel[] = [];
  optionsSort: {property: string | null, order: string} = {property: null, order: 'asc'};

  ngOnInit(): void {
    const {data}: any = (jsonData as any).default;
    this.tracks = data;
    console.log(this.tracks);
  }

  changeSort(property: string): void {
    const {order} = this.optionsSort;
    this.optionsSort = {
      property,
      order: (order === 'asc') ? 'desc' : 'asc'
    }
  }

}
