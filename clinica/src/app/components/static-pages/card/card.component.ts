import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() country:string=""
  @Input() fullname:string=""
  @Input() skill:string=""
  @Input() specialst:string=""
  @Input() startWork:string=""
  @Input() description:string=""
}
