import { Component } from '@angular/core';
import { NavbarComponent } from '../../static-pages/navbar/navbar.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
