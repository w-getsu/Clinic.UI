import { Component } from '@angular/core';
import { SkillModel } from '../d-inters/skill-model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills!:SkillModel[]


  
}
