import { Component } from '@angular/core';
import { NavbarComponent } from '../../static-pages/navbar/navbar.component';
import { FooterComponent } from '../../static-pages/footer/footer.component';
import { MiniSidebarComponent } from '../../static-pages/mini-sidebar/mini-sidebar.component';

@Component({
  selector: 'app-specialists',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MiniSidebarComponent],
  templateUrl: './specialists.component.html',
  styleUrl: './specialists.component.scss'
})
export class SpecialistsComponent {

}
