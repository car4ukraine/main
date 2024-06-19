import { Component } from '@angular/core';
import { DonateButtonComponent } from "../../../../common/components/buttons/donate-button/donate-button.component";

@Component({
    selector: 'app-ongoing-fundraiser-section',
    standalone: true,
    templateUrl: './ongoing-fundraiser-section.component.html',
    styleUrl: './ongoing-fundraiser-section.component.scss',
    imports: [DonateButtonComponent]
})
export class OngoingFundraiserSectionComponent {
  public readonly title: string = 'Ongoing Fundraiser';
  private readonly assetsPath: string = '/assets/images/home/ongoing-fundraiser';
  public readonly banner: {
    src: string,
    title: string,
    alt: string
  } = {
    src: `${this.assetsPath}/fellamobiles-armoured-up.jpg`,
    title: '🛻Fellamobiles Armoured Up🛡️',
    alt: 'Three cars ready for delivery to the Ukrainian frontline'
  };
  public readonly description: string = `Most of the cars we send to the frontline are donated by fellas from the UK or EU. Even though a donated car significantly saves costs per car to be ready for the frontline, some costs still have to be covered. <br><br>They include: repairing and installing armor (largest part), adding machine gun turret, painting and delivering to the frontline. This all requires extra 1,500 - 2,500 USD per car. With this fundraiser we'll cover the cost for 8 cars every month donated by fellas from EU and UK. Also if you have a car to donate, please click Donate Car at the home page or use this link car4ukraine.com/donate-car`
}
