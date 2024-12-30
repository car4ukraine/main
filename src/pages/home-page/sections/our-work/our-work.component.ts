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

@Component({
  standalone: true,
  selector: 'app-our-work-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  viewProviders: [
    provideIcons({
      heroArrowLeft,
      heroArrowRight
    })
  ],
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="text-4xl font-bold font-tektur">Our Work</div>
      </div>
      <div class="col-span-6 font-tektur">
        Each car goes through a long process of logistics, armoring, and servicing before reaching the frontline."
      </div>
      <div class="col-span-12">

        <div class="relative w-full flex gap-6 snap-x overflow-x-auto h-[578px]" #scrollContainer>

          @for (file of files; track file.src) {

            <div class="snap-center shrink-0 h-[578px] relative">
              <img class="shrink-0 rounded-lg shadow-xl bg-white h-[578px] brightness-50" [src]="file.src">
              <div class="absolute top-0 left-0 font-tektur w-4/5 text-[28px] flex gap-2 p-8">
                <div>{{ $index }}.</div>
                <div class="text-wrap">
                  {{ file.title }}
                </div>
              </div>
            </div>

          }

        </div>
      </div>

      <div class="col-span-12">

        <div class="justify-start items-center gap-[27px] flex">

          <div class="justify-start items-center flex gap-8">

            <div (click)="prevSlide()" class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] ">
              <ng-icon name="heroArrowLeft"/>
            </div>

            <div class="text-[#dde1e6] text-base font-normal font-['Tektur'] leading-[23px] tracking-wide">07</div>

            <div (click)="nextSlide()" class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] ">
              <ng-icon name="heroArrowRight"/>
            </div>

          </div>

          <div class="w-full h-[3px] relative">
            <div class="w-full h-0.5 left-0 top-[1px] absolute opacity-60 bg-[#8895a4]"></div>
            <div class="w-[10%] h-[3px] left-0 top-0 absolute bg-[#dde1e6]"></div>
          </div>

        </div>
      </div>

    </div>

  `,
  imports: [
    NgIcon
  ],
  host: {
    class: `w-full bg-[#1F2125] p-10 py-24 flex flex-col items-center justify-center text-white`
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

}
