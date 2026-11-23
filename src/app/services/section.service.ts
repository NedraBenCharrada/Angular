import { Injectable, signal } from '@angular/core';

export type Section =
    | 'accueil'
    | 'profil'
    | 'conferences'
    | 'amis'
    | 'notifications'
    | 'admin';

@Injectable({ providedIn: 'root' })
export class SectionService {
    // the section currently displayed
    current = signal<Section>('accueil');

    show(section: Section): void {
        this.current.set(section);
        window.scrollTo({ top: 0 });
    }
}