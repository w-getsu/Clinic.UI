import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isChecked = false;

  constructor(private router: Router,private service : AuthServiceService) {
    this.Checker()
  }

  Checker(){
    this.isChecked = this.service.isAuthorized();
  }
}
