import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { ListConf } from '../list-conf/list-conf';
import { UserProfile } from '../../sharedComponent/user-profile/user-profile';
import { FriendsList } from '../../sharedComponent/friends-list/friends-list';
import { Notifications } from '../../sharedComponent/notifications/notifications';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ListConf, UserProfile, FriendsList, Notifications],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  section = inject(SectionService);
  list: Conference[] = [];
  searchTitle: string = '';

  ngOnInit(): void {
    this.list = new ConferenceList().conferences;
  }

  get filteredList(): Conference[] {
    const term = this.searchTitle.trim().toLowerCase();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.list.filter(
      (conf) =>
        new Date(conf.date) >= today &&
        conf.title.toLowerCase().includes(term)
    );
  }

  participate(conf: Conference): void {
    if (conf.availablePlaces > 0) {
      conf.nbrReservation++;
    }
  }
}

// The list of conferences (kept in home, no separate file)
export class ConferenceList {
  conferences: Conference[] = [
    new Conference(
      1,
      'Angular 21 Conference',
      'Les nouveautés d’Angular 21 : signals, contrôle de flux natif et pipes.',
      new Date('2027-11-15'),
      'Tunis',
      50,
      25,
      'https://picsum.photos/id/1/400/250'
    ),
    new Conference(
      2,
      'Signals Workshop',
      'Atelier pratique sur les signals et la réactivité.',
      new Date('2027-11-30'),
      'Ariana',
      30,
      24,
      'https://picsum.photos/id/20/400/250'
    ),
    new Conference(
      3,
      'Web Conference',
      'Tendances du développement web moderne.',
      new Date('2027-11-20'),
      'Sousse',
      40,
      40,
      'https://picsum.photos/id/60/400/250'
    ),
  ];
}