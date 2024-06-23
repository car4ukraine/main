import { Component } from '@angular/core';

@Component({
  selector: 'app-network-section',
  standalone: true,
  imports: [],
  templateUrl: './network-section.component.html',
  styleUrl: './network-section.component.scss'
})
export class NetworkSectionComponent {
  public readonly title: string = 'Our Network';
}
