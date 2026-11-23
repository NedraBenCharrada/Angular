import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-list-conf',
  imports: [DatePipe, UpperCasePipe, NgClass],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  @Input() conferences: Conference[] = [];
  @Output() book = new EventEmitter<Conference>();

  selectedId: number | null = null;

  btnClass(conf: Conference): string {
    if (conf.availablePlaces === 0) return 'btn-red';
    if (conf.availablePlaces < 10) return 'btn-orange';
    return 'btn-green';
  }

  toggleDetails(conf: Conference): void {
    this.selectedId = this.selectedId === conf.id ? null : conf.id;
  }

  onBook(event: MouseEvent, conf: Conference): void {
    event.stopPropagation(); // do not open/close the details when clicking the button
    this.book.emit(conf);
  }
}