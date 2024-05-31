import { Component } from '@angular/core';
import { DonateButtonComponent } from '../../buttons/donate-button/donate-button.component';
import { DonateCarButtonComponent } from "../../buttons/donate-car-button/donate-car-button.component";


@Component({
    selector: 'app-hero-section',
    standalone: true,
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    imports: [DonateButtonComponent, DonateCarButtonComponent]
})
export class HeroSectionComponent {
  public readonly title: string = "At the Volunteering Initiative Car for Ukraine"
  public readonly description: string = "We accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine."
}
