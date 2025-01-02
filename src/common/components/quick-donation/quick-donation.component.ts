import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-quick-donation',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-4xl font-bold">Quick Donation</div>
    <div>

    </div>
  `,
  host: {
    class: 'flex flex-col gap-4 w-full items-center'
  }
})
export class QuickDonationComponent {

}
