import { Component } from '@angular/core';
import { NavbarComponent } from '../../static-pages/navbar/navbar.component';
import { FooterComponent } from '../../static-pages/footer/footer.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
<<<<<<< HEAD
  imports: [NavbarComponent,FooterComponent,],
=======
  imports: [NavbarComponent,FooterComponent],
>>>>>>> 9ba3fa64c4d61364217adcf611538ee923ab82f5
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

}
