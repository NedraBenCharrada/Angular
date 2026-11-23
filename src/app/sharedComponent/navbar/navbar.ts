import { Component, inject } from '@angular/core';
import { SectionService, type Section } from '../../services/section.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  section = inject(SectionService);

  links: { label: string; id: Section }[] = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Profil', id: 'profil' },
    { label: 'Conférences', id: 'conferences' },
    { label: 'Amis', id: 'amis' },
    { label: 'Notifications', id: 'notifications' },
    { label: 'Admin', id: 'admin' },
  ];
}