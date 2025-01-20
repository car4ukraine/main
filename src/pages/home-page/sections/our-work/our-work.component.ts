import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {heroArrowLeft, heroArrowRight} from "@ng-icons/heroicons/outline";
import {NgStyle} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-our-work-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    provideIcons({
      heroArrowLeft,
      heroArrowRight
    })
  ],
  template: `

    <div class="grid grid-cols-12 gap-16  max-w-[1330px] w-full max-lg:overflow-hidden">
      <div class="col-span-12">
        <div class="text-6xl font-bold font-tektur text-[#DDE2E7]" i18n>Our Work</div>
      </div>
      <div class="col-span-6 font-tektur text-[#919EAB] text-xl max-md:col-span-10" i18n>
        Each car goes through a long process of logistics, armoring, and servicing before reaching the frontline."
      </div>
      <div class="col-span-12 mt-4">
<!--        calc(100vw - ((100vw - 1314px) / 2))-->
        <div class="relative w-full lg:w-auto flex gap-[6px] snap-x overflow-x-auto lg:h-[578px] scrollbar-hide max-w-[calc(100vw-20px)] min-w-[calc(100vw-20px)] min-[1330px]:max-w-[100vw] min-[1330px]:min-w-[100vw] min-[1330px]:ml-[calc(-1*((100vw-1248px)/2))]" style #scrollContainer>
          @for (file of files; track file.src) {
            <div class="snap-center flex items-center w-full min-[1330px]:w-auto shrink-0 max-h-[578px] {{ $index === 0 ? 'min-[1330px]:pl-[calc(((100vw-1248px)/2))]' : '' }}">
              <div class="relative w-full h-full">

                <img class="aspect-video w-full lg:w-auto shrink-0 rounded-lg shadow-xl bg-white lg:h-[578px] brightness-50 h-full object-contain"
                     [src]="file.src"/>
                <div class="absolute top-0 left-0 w-full h-full flex justify-center text-center p-8 max-md:px-0">
                  <div class="text-[#FFFFFF] font-tektur font-semibold text-4xl max-md:text-xl">
                    {{ $index }}. {{ file.title }}
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      <div class="col-span-12">
        <div class="justify-start items-center gap-[27px] flex">
          <div class="justify-start items-center flex gap-8">
            <div (click)="prevSlide()"
                 class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] ">
              <ng-icon name="heroArrowLeft"/>
            </div>
            <div
              class="text-[#dde1e6] text-base font-normal font-['Tektur'] leading-[23px] tracking-wide">{{ files.length }}
            </div>
            <div (click)="nextSlide()"
                 class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] ">
              <ng-icon name="heroArrowRight"/>
            </div>
          </div>
          <div class="w-full h-[3px] relative">
            <div class="w-full h-0.5 left-0 top-[1px] absolute opacity-60 bg-[#8895a4]"></div>
            <div class="w-[10%] h-[3px] left-0 top-0 absolute bg-[#dde1e6]" [style.left]="getProgressPosition()"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [
    NgIcon,
    NgStyle
  ],
  host: {
    class: `w-full bg-[#1F2125] p-10 py-24 flex flex-col items-center justify-center text-white max-md:py-20 max-md:px-2.5`
  }
})
export class OurWorkComponent implements AfterViewInit {

  public readonly files = [
    {
      src: 'assets/images/home/donated-vehicles/v-01.jpg',
      title: `We source cars in the EU and UK`
    },
    {
      src: 'assets/images/home/donated-vehicles/v-02.jpg',
      title: `Deliver trucks to Ukraine`
    },
    {
      src: 'assets/images/home/donated-vehicles/v-03.jpg',
      title: `Repair and install armor`
    },
    {
      src: 'assets/images/home/donated-vehicles/v-04.jpg',
      title: `Paint and Brand`
    },
    {
      src: 'assets/images/home/donated-vehicles/v-05.jpg',
      title: `Deliver to the frontlines`
    },
    {
      src: 'assets/images/home/donated-vehicles/h-06.jpg',
      title: `Repeat...`
    },
  ];

  @ViewChild('scrollContainer', {static: true})
  public scrollContainer!: ElementRef;

  // public firstInvisibleItemIndex = -1;

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
  }

  public ngAfterViewInit() {
    // this.onScroll();
  }

  // public onScroll() {
  //   console.log('onScroll')
  //   const container = this.scrollContainer.nativeElement as HTMLDivElement;
  //   const containerRect = container.getBoundingClientRect();
  //
  //   for (let i = 0; i < container.children.length; i++) {
  //
  //     const item = container.children.item(i);
  //
  //     if (!item) {
  //       continue;
  //     }
  //
  //     const itemRect = item.getBoundingClientRect();
  //
  //     // Check horizontal visibility
  //     const isVisible =
  //       itemRect.left >= containerRect.left &&
  //       itemRect.right <= containerRect.right;
  //
  //     if (isVisible) {
  //       console.log(`Item visible: ${item.textContent}`);
  //     } else {
  //       if (this.firstInvisibleItemIndex === -1) {
  //         this.firstInvisibleItemIndex = i;
  //       }
  //     }
  //
  //   }
  // }
  public getProgressPosition(): string {
    if (this.currentSlideIndex >= this.files.length - 1) {
      return `calc(100% - 10%)`;
    }

    const progress = (this.currentSlideIndex / (this.files.length - 1)) * 100;
    return `${progress}%`;
  }
}
