import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { CardPlayerComponent } from '@shared/components/card-player/card-player.component';
import { TrackModel } from '@core/models/Tracks.model';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [
    NgClass,
    CardPlayerComponent,
    NgFor,
  ],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void {
      console.log('Data tracks:', this.dataTracks);
  }
}
