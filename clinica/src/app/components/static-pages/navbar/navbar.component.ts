import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  isChecked = false;

  constructor(private router: Router,private service : AuthServiceService) {
  }
  ngOnInit(): void {
    this.Checker()
  }

  Out()
  {
    this.service.logOut()
    this.router.navigateByUrl('/login')
  }

  In(){
    this.router.navigateByUrl('/login');
  }

  Checker(){
    this.isChecked = this.service.isAuthorized();
  }
}
