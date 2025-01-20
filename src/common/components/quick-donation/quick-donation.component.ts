import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-quick-donation',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-6xl font-tektur text-[#1F2125] font-bold drop-shadow-xl" i18n>Quick Donation</div>
    <div>
      <iframe src="https://donorbox.org/embed/power-the-frontline?language=en-us" name="donorbox"
              allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no"
              height="900px" width="100%" style="max-width: 500px; min-width: 250px; max-height:none!important"
              allow="payment">
      </iframe>
    </div>
  `,
  host: {
    class: 'flex flex-col py-10 gap-4 w-full items-center'
  }
})
export class QuickDonationComponent {

}
