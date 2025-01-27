import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {heroArrowLeft, heroArrowRight} from "@ng-icons/heroicons/outline";
import {bootstrapHeart} from "@ng-icons/bootstrap-icons";

@Component({
  standalone: true,
  selector: 'app-our-work-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    provideIcons({
      heroArrowLeft,
      heroArrowRight,
      bootstrapHeart
    })
  ],
  template: `

    <div class="w-full max-w-full md:max-w-[1330px] space-y-16">


      <div class="text-6xl font-bold font-tektur text-[#DDE2E7] max-[1330px]:px-10 max-md:px-2.5" i18n>
        Our Work
      </div>
      <div class="font-tektur text-[#919EAB] text-xl text-wrap break-all max-[1330px]:px-10 max-md:px-2.5" i18n>
        Each car goes through a long process of logistics, armoring, and servicing before reaching the frontline."
      </div>
      <div class="mt-4">
        <div
          class="
            relative
            w-full
            lg:w-auto
            flex
            gap-[6px]
            snap-x
            overflow-x-auto
            lg:h-[578px]
            scrollbar-hide

            max-[1330px]:px-10
            max-w-[calc(100vw-20px)]
            min-w-[calc(100vw-20px)]
            min-[1330px]:max-w-[100vw]
            min-[1330px]:min-w-[100vw]
            min-[1330px]:ml-[calc(-1*((100vw-1330px)/2))]"
         style #scrollContainer>
          @for (file of files; track file.src) {

            @if (file.isBanner) {

              <div
                class="snap-center flex items-center w-full min-[1330px]:w-auto shrink-0 max-h-[578px] {{ $index === 0 ? 'min-[1330px]:pl-[calc(((100vw-1330px)/2))]' : '' }}">
                <div class="relative w-full h-full">

                  <img
                    class="aspect-video w-full lg:w-auto shrink-0 rounded-lg shadow-xl bg-white min-[1330px]:h-[578px] brightness-50 object-contain"
                    [src]="file.src"/>
                  <div class="absolute top-0 left-0 w-full h-full flex justify-center text-center p-8 max-md:px-0">
                    <div class="text-[#FFFFFF] font-tektur font-semibold text-4xl max-md:text-xl">
                      {{ $index + 1 }}. {{ file.title }}
                    </div>
                  </div>
                </div>
              </div>

            } @else {

              <div
                class="snap-center flex items-center w-full min-[1330px]:w-auto min-[1330px]:min-w-[400px] shrink-0 max-h-[578px]">

                <a
                  class="cursor-pointer dbox-donation-button flex gap-4 items-center justify-center relative w-full"
                  id="preview_inline_popup_button"
                  hreflang="en"
                  target="_blank"
                  href="https://donorbox.org/power-the-frontline?default_interval=o">
                  <ng-icon class="text-[#FEC639]" name="bootstrapHeart" size="1.5em"/>
                  <div
                    class="text-center text-[#f7f8f7] text-2xl font-medium font-tektur leading-loose tracking-[2.88px]"
                    i18n>
                    DONATE
                  </div>
                </a>

              </div>
            }

          }
        </div>
      </div>

      <div class="justify-start items-center gap-[27px] flex w-full max-[1330px]:px-10 max-md:px-2.5">
        <div class="justify-start items-center flex gap-8">
          <button (click)="prevSlide()"
                  role="button"
                  class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] cursor-pointer">
            <ng-icon name="heroArrowLeft"/>
          </button>
          <div
            class="text-[#dde1e6] text-base font-normal font-['Tektur'] leading-[23px] tracking-wide">{{ files.length }}
          </div>
          <button (click)="nextSlide()"
                  role="button"
                  class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] cursor-pointer">
            <ng-icon name="heroArrowRight"/>
          </button>
        </div>
        <div class="w-full h-[3px] relative">
          <div class="w-full h-0.5 left-0 top-[1px] absolute opacity-60 bg-[#8895a4]"></div>
          <div class="w-[10%] h-[3px] left-0 top-0 absolute bg-[#dde1e6]" [style.left]="getProgressPosition()"></div>
        </div>
      </div>

    </div>

  `,
  imports: [
    NgIcon
  ],
  host: {
    class: `
      max-md:py-20
      py-24

      flex justify-center

      bg-[#1F2125] text-white
      w-full min-w-full
      max-lg:overflow-hidden
    `
  }
})
export class OurWorkComponent implements AfterViewInit {

  public readonly files = [
    {
      src: 'assets/images/our-work/1.png',
      title: `We source cars in the EU and UK`,
      isBanner: true,
    },
    {
      src: 'assets/images/our-work/2.png',
      title: `Deliver trucks to Ukraine`,
      isBanner: true,
    },
    {
      src: 'assets/images/our-work/3.png',
      title: `Repair and install armor`,
      isBanner: true,
    },
    {
      src: 'assets/images/our-work/4.png',
      title: `Paint and Brand`,
      isBanner: true,
    },
    {
      src: 'assets/images/our-work/5.png',
      title: `Deliver to the frontlines`,
      isBanner: true,
    },
    {
      src: 'assets/images/our-work/6.png',
      title: `Repeat...`,
      isBanner: true,
    },
    {
      src: '',
      title: '',
      isBanner: false,
    }
  ];

  @ViewChild('scrollContainer', {static: true})
  public scrollContainer!: ElementRef;

  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public currentSlideIndex = 0;

  public nextSlide() {
    if (this.currentSlideIndex === this.files.length - 1) {
      return;
    }
    this.currentSlideIndex++;
    this.scrollToCurrentSlide();
  }

  public prevSlide() {
    if (this.currentSlideIndex === 0) {
      return;
    }
    this.currentSlideIndex--;
    this.scrollToCurrentSlide();
  }

  public scrollToCurrentSlide() {
    const container = this.scrollContainer.nativeElement as HTMLDivElement;
    const slide = container.children.item(this.currentSlideIndex) as HTMLDivElement;
    container.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth'
    });
    this.changeDetectorRef.detectChanges();
  }

  public ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  public getProgressPosition(): string {
    if (this.currentSlideIndex >= this.files.length - 1) {
      return `calc(100% - 10%)`;
    }

    const progress = (this.currentSlideIndex / (this.files.length - 1)) * 100;
    return `${progress}%`;
  }
}
