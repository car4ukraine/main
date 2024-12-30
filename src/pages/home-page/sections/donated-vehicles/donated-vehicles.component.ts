import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {MediaAboutUsComponent} from "../media-about-us/media-about-us.component";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {heroArrowLeft, heroArrowRight} from "@ng-icons/heroicons/outline";

@Component({
  standalone: true,
  selector: 'app-donated-vehicles-section-component',
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
        <div class="text-4xl font-bold font-tektur">
          Donated Vehicles
        </div>
      </div>
      <div class="col-span-6 font-tektur">
        “My car was too good to sell, and I wish it a better destiny” – People express their motivation to donate a car
        in many ways, but they all share one wish.
      </div>
      <div class="col-span-12"></div>

      <div class="col-span-12">
        <div class="relative w-full flex gap-6 snap-x overflow-x-auto h-[578px]" #scrollContainer>
          @for (file of files; track file.src) {

            <div class="snap-center shrink-0 h-[578px]">
              <img class="shrink-0 rounded-lg shadow-xl bg-white h-[578px]" [src]="file.src">
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

            <div class="text-[#dde1e6] text-base font-normal font-['Tektur'] leading-[23px] tracking-wide">07</div>

            <div (click)="nextSlide()"
                 class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] ">
              <ng-icon name="heroArrowRight"/>
            </div>

          </div>

          <div class="w-[1086px] h-[3px] relative">
            <div class="w-[1086px] h-0.5 left-0 top-[1px] absolute opacity-60 bg-[#8895a4]"></div>
            <div class="w-[315px] h-[3px] left-0 top-0 absolute bg-[#dde1e6]"></div>
          </div>

        </div>
      </div>

    </div>


  `,
  imports: [
    NgIcon
  ],
  host: {
    class: `w-full bg-[#1F2125] p-10 flex flex-col items-center justify-center text-white`
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
    {
      src: 'assets/images/home/donated-vehicles/v-01.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-02.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-03.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-04.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-05.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-06.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-07.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-08.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-09.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-10.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-11.jpg',
    },
    {
      src: 'assets/images/home/donated-vehicles/v-12.jpg',
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

}
