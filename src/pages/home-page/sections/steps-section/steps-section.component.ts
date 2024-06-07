import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-steps-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './steps-section.component.html',
  styleUrl: './steps-section.component.scss'
})
export class StepsSectionComponent {
  public readonly title: string = 'Our Work';
  public readonly assetsPath: string = '/assets/images/home/steps/';
  public readonly steps: Array<{
    title: string,
    image: string,
    alt: string
  }> = [
    {
      title: 'We Source Cars in the EU and UK',
      image: '1-source.jpg',
      alt: 'Two donated cars in transition to Ukraine'
    },
    {
      title: 'Deliver Trucks to Ukraine',
      image: '2-deliver.jpg',
      alt: 'A car carrier filled with donated vehicles'
    },
    {
      title: 'Repair and Install Armor',
      image: '3-repair.jpg',
      alt: 'Two metal welders install armour on the door of a donated pickup'
    },
    {
      title: 'Paint and Brand',
      image: '4-paint.jpg',
      alt: 'Two painted and branded pickups filled with donation supplies for Ukrainian soldiers'
    },
    {
      title: 'Deliver to the Frontlines',
      image: '5-frontline.jpg',
      alt: 'The happy faces of Ukrainian soldiers and volunteers and in the background are lined donated cars'
    },
    {
      title: 'Repeat...',
      image: '6-repeat.jpg',
      alt: 'Volunteer Roman Hapachilo stands in front of a completely shelled pickup'
    }
  ];
}
