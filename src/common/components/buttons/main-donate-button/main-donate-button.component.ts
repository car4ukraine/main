import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation
} from "@angular/core";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {bootstrapHeart} from "@ng-icons/bootstrap-icons";
import {isPlatformBrowser} from "@angular/common";

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
      class="w-full h-[70px] px-[18px] bg-[#1f2024] justify-center items-center gap-[7px] inline-flex cursor-pointer dbox-donation-button"
      [id]="aId()"
      [hreflang]="hreflang()"
      [target]="target()"
      [href]="href()">
      <ng-icon class="text-[#FEC639]" name="bootstrapHeart" size="1.5em"/>
      <div
        class="text-center text-[#f7f8f7] text-2xl font-medium font-tektur leading-loose tracking-[2.88px]" i18n>
        DONATE
      </div>
    </a>
  `,
  host: {
    class: ''
  }
})
export class MainDonateButtonComponent implements AfterViewInit {

  public readonly href = input<string>('https://donorbox.org/power-the-frontline?default_interval=o');
  public readonly target = input<'_blank' | '_self'>('_blank');
  public readonly aId = input<string>('preview_inline_popup_button');
  public readonly hreflang = input<string>('en');
  private readonly platformId = inject(PLATFORM_ID);
  public ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if ('dw_open' in window && typeof window.dw_open === 'function') {
        window.dw_open();
      }
    }
  }
}
