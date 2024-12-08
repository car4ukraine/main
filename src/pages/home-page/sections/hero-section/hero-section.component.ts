import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {DonateButtonComponent} from '../../buttons/donate-button/donate-button.component';
import {DonateCarButtonComponent} from '../../buttons/donate-car-button/donate-car-button.component';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DonateButtonComponent, DonateCarButtonComponent],
  host: {
    class: 'h-96 flex w-full flex-col justify-center items-center gap-4 bg-gradient-to-b from-[#7b8693] to-white border-[#ccd3da]'
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
