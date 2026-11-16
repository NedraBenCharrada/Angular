import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface Conference {
  id: number;
  picture: string;
  title: string;
  date: Date;
  address: string;
  availablePlaces: number;
}

@Component({
  selector: 'app-list-conf',
  imports: [DatePipe],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  conferences: Conference[] = [
    {
      id: 1,
      picture: 'https://picsum.photos/id/1/400/250',
      title: 'Angular Summit',
      date: new Date('2026-12-10'),
      address: 'Tunis, Tunisia',
      availablePlaces: 25,
    },
    {
      id: 2,
      picture: 'https://picsum.photos/id/20/400/250',
      title: 'Web Dev Days',
      date: new Date('2027-01-15'),
      address: 'Sousse, Tunisia',
      availablePlaces: 0,
    },
    {
      id: 3,
      picture: 'https://picsum.photos/id/60/400/250',
      title: 'AI & Cloud Conference',
      date: new Date('2027-02-03'),
      address: 'Sfax, Tunisia',
      availablePlaces: 8,
    },
  ];
}