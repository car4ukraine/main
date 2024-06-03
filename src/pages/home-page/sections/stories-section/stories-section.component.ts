import { Component } from '@angular/core';

@Component({
  selector: 'app-stories-section',
  standalone: true,
  imports: [],
  templateUrl: './stories-section.component.html',
  styleUrl: './stories-section.component.scss'
})
export class StoriesSectionComponent {
  public readonly title: string = 'Buy Car for Us';
}
