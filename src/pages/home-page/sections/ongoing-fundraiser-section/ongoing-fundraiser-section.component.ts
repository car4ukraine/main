import { Component } from '@angular/core';

@Component({
  selector: 'app-ongoing-fundraiser-section',
  standalone: true,
  imports: [],
  templateUrl: './ongoing-fundraiser-section.component.html',
  styleUrl: './ongoing-fundraiser-section.component.scss'
})
export class OngoingFundraiserSectionComponent {
  public readonly title: string = 'Ongoing Fundraiser';
}
