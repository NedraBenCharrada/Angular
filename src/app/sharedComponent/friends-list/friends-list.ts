import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  // two-way data binding: the three inputs share the same variable
  userName: string = 'Ahmed';

  friends: string[] = ['Sami', 'Sara', 'Amine'];
}