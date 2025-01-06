import {ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation} from "@angular/core";
import {MediaAboutUsComponent} from "../media-about-us/media-about-us.component";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {heroArrowLeft, heroArrowRight} from "@ng-icons/heroicons/outline";
import {SafePipe} from "safe-pipe";

@Component({
  standalone: true,
  selector: 'app-they-bought-us-cars-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    provideIcons({
      heroArrowLeft,
      heroArrowRight
    })
  ],
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="text-6xl font-bold font-tektur text-[#1F2125]">
          They Bought Us Cars
        </div>
      </div>
      <div class="text-xl col-span-6 font-tektur text-[#3D4650]">
        From every corner of the globe people come to Ukraine in person to stand with us and show their support.
      </div>
      <div class="col-span-12">
        <div class="relative flex w-full gap-6 border-t-2 border-[#535353] my-4 py-4" #scrollContainer>
          @for (article of articles; track article.iframe) {

            <div class="grid grid-cols-12">
              <div class="col-span-5 font-tektur">
                <div class="text-[30px] font-bold mb-4 text-[#1F2125]">
                  {{ article.title }}
                </div>
                <div class="flex flex-col gap-4" [innerHTML]="article.description"></div>
              </div>
              <div class="col-span-7">
                <div [innerHTML]="article.iframe | safe: 'html'"></div>
                <div [innerHTML]="article.comment"></div>
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

            <div class="text-[#dde1e6] text-base font-normal font-['Tektur'] leading-[23px] tracking-wide">07</div>

            <div (click)="nextSlide()"
                 class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] ">
              <ng-icon name="heroArrowRight"/>
            </div>

          </div>

          <div class="w-full h-[3px] relative">
            <div class="w-full h-0.5 left-0 top-[1px] absolute opacity-60 bg-[#8895a4]"></div>
            <div class="w-[10%] h-[3px] left-0 top-0 absolute bg-[#3D4650]"></div>
          </div>

        </div>
      </div>

      <div class="col-span-12 pt-10">

        <div class="flex flex-col gap-8 lg:flex-row justify-between w-full">
          <div class="text-center"><span
            class="text-[#216df9] text-[54px] font-bold font-['Tektur'] leading-[70.26px] tracking-widest">THEY MADE IT!</span><span
            class="text-black text-[54px] font-bold font-['Tektur'] leading-[70.26px] tracking-widest"> </span><span
            class="text-[#ffd000] text-[54px] font-bold font-['Tektur'] leading-[70.26px] tracking-widest">WILL YOU?</span>
          </div>
          <div
            class="max-w-[429px] lg:flex-1 h-[69px] px-[18px] bg-[#1f2024] justify-center items-center gap-[7px] inline-flex">
            <div class="text-center text-[#f7f8f7] text-2xl font-medium font-['Tektur'] leading-loose tracking-[2.88px]">
              BUY PICKUP TRUCK
            </div>
          </div>
        </div>
      </div>

    </div>

  `,
  imports: [
    NgIcon,
    SafePipe
  ],
  host: {
    class: `w-full bg-white p-10 py-36 flex flex-col gap-8 items-center justify-center`
  }
})
export class TheyBoughtUsCarsComponent {

  public readonly articles = [
    {
      title: `Adam from USA `,
      description: `
        <p class="text-[#3D4650] text-base">Adam always wanted to help Ukraine with a tangible donation. In February 2023, he came to Donbas and personally donated two trucks to soldiers.</p>
        <p class="text-[#3D4650] text-base">Pickup trucks are versatile vehicles popular in rural areas of Britain. Today, many of them left their bucolic homes to improve the mobility of the Ukrainian troops in the Donetsk region. We follow one of the donors — Adam in his trip to frontline Kramatorsk to deliver the car he donated and find out his motivation and impressions after being this close to the frontline.</p>
      `,
      iframe: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/dxH5qpn7KLs?si=N8y3B24IIAJvh_KO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      comment: ``
    }
  ];

  @ViewChild('scrollContainer', {static: true})
  public scrollContainer!: ElementRef;

  public currentSlideIndex = 0;

  public nextSlide() {
    if (this.currentSlideIndex === this.articles.length - 1) {
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

}
