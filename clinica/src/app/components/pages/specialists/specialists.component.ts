import { Component } from '@angular/core';
import { NavbarComponent } from '../../static-pages/navbar/navbar.component';
import { FooterComponent } from '../../static-pages/footer/footer.component';
import { MiniSidebarComponent } from '../../static-pages/mini-sidebar/mini-sidebar.component';
import { CardComponent } from '../../static-pages/card/card.component';
import { DurationTimeComponent } from '../../static-pages/duration-time/duration-time.component';

@Component({
  selector: 'app-specialists',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    MiniSidebarComponent,
    CardComponent,
    DurationTimeComponent],
  templateUrl: './specialists.component.html',
  styleUrl: './specialists.component.scss'
})
export class SpecialistsComponent {

}
