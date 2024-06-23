import { Component } from '@angular/core';



@Component({
    selector: 'app-hero-section',
    standalone: true,
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    imports: []
})
export class HeroSectionComponent {
  public readonly title: string = 'Donate Car'
  public readonly p1: string = 'Dozens of people across EU, UK and the US have donated their cars or sold them to buy cars Ukrainian soldiers need right now.'
  public readonly p2: string = 'Those who decide to bring trucks personally to Lviv often treat it as a vacation plus a good deed. We help with paperwork and can show them around the town, ending with a great dinner.'
}
