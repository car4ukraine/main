import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {DonateCarButtonComponent} from '../../buttons/donate-car-button/donate-car-button.component';
import {NgOptimizedImage} from "@angular/common";
import {
  MainDonateButtonComponent
} from "../../../../common/components/buttons/main-donate-button/main-donate-button.component";


@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ DonateCarButtonComponent, NgOptimizedImage, MainDonateButtonComponent],
  host: {
    class: 'h-[464px] flex w-full flex-col justify-center items-center gap-10 bg-gradient-to-b from-[#7b8693] to-[#DDE2E7] border-[#ccd3da] max-md:gap-4 max-md:mb-10'
  }
})
export class HeroSectionComponent {
  public readonly title: string = 'At the Volunteering Initiative Car for Ukraine'
  public readonly description: string = 'We accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.'
  public readonly metrics: Array<{
    name: string,
    value: number,
    prefix: string,
    postfix: string
  }> = [
    {
      name: 'Cars Delivered',
      value: 417,
      prefix: '',
      postfix: ''
    },
    {
      name: 'Worth of Cars',
      value: 3.3,
      prefix: '$',
      postfix: 'M+'
    },
  ]
}
