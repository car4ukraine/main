import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-donate-car-button',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a href="/donate-car" class="w-full min-w-[340px] h-[70px] px-[18px] border-2 border-[#1f2024] justify-center items-center gap-[7px] inline-flex">
      <div class="text-center text-[#1f2024] text-2xl font-medium font-['Tektur'] leading-loose tracking-[2.88px]">DONATE CAR</div>
    </a>
  `
})
export class DonateCarButtonComponent {

}
