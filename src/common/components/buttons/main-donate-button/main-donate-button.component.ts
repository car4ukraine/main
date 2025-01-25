import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {bootstrapHeart} from "@ng-icons/bootstrap-icons";

@Component({
  selector: 'app-main-donate-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      bootstrapHeart
    })
  ],
  template: `
    <a
      class="w-full min-w-[340px] h-[70px] px-[18px] bg-[#1f2024] justify-center items-center gap-[7px] inline-flex cursor-pointer dbox-donation-button"
      id="preview_inline_popup_button"
      href="https://donorbox.org/power-the-frontline?default_interval=o">
      <ng-icon class="text-[#FEC639]" name="bootstrapHeart" size="1.5em"/>
      <div
        class="text-center text-[#f7f8f7] text-2xl font-medium font-tektur leading-loose tracking-[2.88px]" i18n>
        DONATE
      </div>
    </a>
  `
})
export class MainDonateButtonComponent {

}
