import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations',
  imports: [],
  templateUrl: './reservations.html',
  styleUrl: './reservations.scss',
})
export class Reservations {
  reservations: any[] = [];
  add(name: string, date: string) {
  if (name && date) this.reservations.push({ name, date });
  }
}
