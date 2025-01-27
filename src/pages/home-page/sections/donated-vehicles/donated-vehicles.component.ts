import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {heroArrowLeft, heroArrowRight} from "@ng-icons/heroicons/outline";

@Component({
  standalone: true,
  selector: 'app-donated-vehicles-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    provideIcons({
      heroArrowLeft,
      heroArrowRight
    })
  ],
  template: `

    <div class="w-full max-w-full md:max-w-[1330px] space-y-16">

      <div class="text-6xl font-bold font-tektur text-[#DDE2E7] max-[1330px]:px-10 max-md:px-2.5" i18n>
        Donated Vehicles
      </div>
      <div class="font-tektur text-[#919EAB] text-xl text-wrap break-all max-[1330px]:px-10 max-md:px-2.5" i18n>
        “My car was too good to sell, and I wish it a better destiny” – People express their motivation to donate a car
        in many ways, but they all share one wish.
      </div>

      <div
        id="donate-vehicles-scroll-container"
        class="
            relative
            w-full
            lg:w-auto
            flex
            gap-[6px]
            overflow-x-auto
            scrollbar-hide

            max-md:px-2.5
            max-[1330px]:px-10
            min-[1330px]:max-w-[100vw]
            min-[1330px]:min-w-[100vw]
            min-[1330px]:ml-[calc(-1*((100vw-1330px)/2))]"
        style #scrollContainer>
        @for (file of files; track file.src) {


          <div
            class="flex items-center min-[1330px]:w-auto shrink-0 {{ $index === 0 ? 'min-[1330px]:pl-[calc(((100vw-1330px)/2))]' : '' }}">
            <div class="relative w-full h-full">

              <img
                class="aspect-video w-full lg:w-auto shrink-0 rounded-lg shadow-xl bg-white brightness-50 object-contain"
                [src]="file.src"/>
            </div>
          </div>

        }
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
export class DonatedVehiclesComponent implements OnInit {

  public readonly files = [
    {
      src: 'assets/images/home/donated-vehicles/h-01.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-02.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-03.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-04.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-05.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-06.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-07.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-08.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-09.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-10.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/h-11.jpg',
    },
  ];

  @ViewChild('scrollContainer', {static: true})
  public scrollContainer!: ElementRef;

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

  public ngOnInit(): void {
    // Shuffle the array
    this.files.sort(() => Math.random() - 0.5);
  }

  public getProgressPosition(): string {
    if (this.currentSlideIndex >= this.files.length - 1) {
      return `calc(100% - 10%)`;
    }

    const progress = (this.currentSlideIndex / (this.files.length - 1)) * 100;
    return `${progress}%`;
  }
}
