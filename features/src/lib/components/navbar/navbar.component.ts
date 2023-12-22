import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'reg-angular-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  open: unknown;
  toggleOpen() {
    throw new Error('Method not implemented.');
  }
}
