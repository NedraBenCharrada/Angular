import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications: string[] = [
    'Nouvelle conférence : Angular 21 Conference',
    'Votre inscription a été confirmée',
  ];

  show: boolean = false;
}