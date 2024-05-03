import { Component } from '@angular/core';
import { FooterComponent } from "../../static-pages/footer/footer.component";
import { NavbarComponent } from "../../static-pages/navbar/navbar.component";

@Component({
    selector: 'app-doctor',
    standalone: true,
    templateUrl: './doctor.component.html',
    styleUrl: './doctor.component.scss',
    imports: [FooterComponent, NavbarComponent]
})
export class DoctorComponent {

}
