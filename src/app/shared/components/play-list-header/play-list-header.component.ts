import { Component } from '@angular/core';

@Component({
  selector: 'app-play-list-header',
  standalone: true,
  imports: [],
  templateUrl: './play-list-header.component.html',
  styleUrl: './play-list-header.component.css'
})
export class PlayListHeaderComponent {
  nombre: string = 'Tatiana Garcia';
  countTracks: number | undefined;

  generateRandomTracks() {
    return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  }

  ngOnInit() {
    this.countTracks = this.generateRandomTracks();
  }
}
