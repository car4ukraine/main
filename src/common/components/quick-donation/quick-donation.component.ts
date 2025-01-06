import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-quick-donation',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-6xl font-tektur text-[#1F2125] font-bold drop-shadow-xl">Quick Donation</div>
    <div>

    </div>
  `,
  host: {
    class: 'flex flex-col py-10 gap-4 w-full items-center'
  }
})
export class QuickDonationComponent {

}
