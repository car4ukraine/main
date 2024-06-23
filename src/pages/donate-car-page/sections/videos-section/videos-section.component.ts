import { Component } from '@angular/core';

@Component({
  selector: 'app-videos-section',
  standalone: true,
  imports: [],
  templateUrl: './videos-section.component.html',
  styleUrl: './videos-section.component.scss'
})
export class VideosSectionComponent {
  public readonly title: string = 'Videos About Donated Cars';
}
