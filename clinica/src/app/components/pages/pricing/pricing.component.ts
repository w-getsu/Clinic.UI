import { Component } from '@angular/core';
import { NavbarComponent } from '../../static-pages/navbar/navbar.component';
import { FooterComponent } from '../../static-pages/footer/footer.component';
<<<<<<< HEAD
import { MiniSidebarComponent } from '../../static-pages/mini-sidebar/mini-sidebar.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

=======
>>>>>>> 9ba3fa64c4d61364217adcf611538ee923ab82f5

@Component({
  selector: 'app-pricing',
  standalone: true,
<<<<<<< HEAD
  imports: [
    NavbarComponent,
    InputMaskModule,
    InputGroupModule,
    InputGroupAddonModule,
    FooterComponent,
    MiniSidebarComponent,
    FormsModule,
     MatFormFieldModule, 
     MatInputModule
  ],
=======
  imports: [NavbarComponent,FooterComponent],
>>>>>>> 9ba3fa64c4d61364217adcf611538ee923ab82f5
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
}
