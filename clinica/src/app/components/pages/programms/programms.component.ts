import { Component } from '@angular/core';
import { NavbarComponent } from "../../static-pages/navbar/navbar.component";
import { MiniSidebarComponent } from "../../static-pages/mini-sidebar/mini-sidebar.component";
import { FooterComponent } from "../../static-pages/footer/footer.component";

@Component({
    selector: 'app-programms',
    standalone: true,
    templateUrl: './programms.component.html',
    styleUrl: './programms.component.scss',
    imports: [NavbarComponent, MiniSidebarComponent, FooterComponent]
})
export class ProgrammsComponent {

}
