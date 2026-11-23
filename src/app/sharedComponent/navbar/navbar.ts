import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = [
    { label: 'Accueil' },
    { label: 'Profil' },
    { label: 'Conférences' },
    { label: 'Amis' },
    { label: 'Notifications' },
    { label: 'Admin' },
  ];

  active = 'Accueil';

  // only changes the highlighted button: no scroll, no filter
  select(label: string): void {
    this.active = label;
  }
}