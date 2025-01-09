import {
  ChangeDetectionStrategy,
  Component, computed,
  ElementRef, inject, OnInit, PLATFORM_ID, Signal, signal,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {heroArrowLeft, heroArrowRight} from "@ng-icons/heroicons/outline";
import {SafePipe} from "safe-pipe";
import {YouTubePlayer} from "@angular/youtube-player";
import {isPlatformBrowser, NgOptimizedImage} from "@angular/common";

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
        <div class="text-6xl font-bold font-tektur text-[#1F2125] max-md:text-4xl" i18n>
          They Bought Us Cars
        </div>
      </div>
      <div class="text-xl col-span-6 font-tektur text-mainColor max-md:col-span-10" i18n>
        From every corner of the globe people come to Ukraine in person to stand with us and show their support.
      </div>
      <div class="col-span-12">
        <div class="relative flex w-full overflow-x-auto scrollbar-hide gap-6 border-t-2 border-[#535353] my-4 py-4"
             #scrollContainer>
          @for (article of articles; track article.videoId) {
            <div class="grid grid-cols-12 min-w-full max-xl:flex max-xl:flex-col landscape:max-xl:flex-row">
              <div class="col-span-6 font-tektur max-md:col-span-12 lg:w-auto">
                <div class="text-[30px] font-bold mb-4 text-[#1F2125]">
                  {{ article.title }}
                </div>
                <div class="flex flex-col gap-4 max-md:mb-8" [innerHTML]="article.details"></div>
              </div>
              <div class="col-span-6 max-md:col-span-12">
                @if (article.videoId) {
                  <youtube-player
                    [videoId]="article.videoId"
                    [width]="playerWidth()"
                    [height]="playerHeight()"
                  >
                  </youtube-player>
                } @else {
                  <a [href]="article.href" target="_blank">
                    <img
                      class="mb-6 shadow-md rounded-lg bg-slate-50 w-full"
                      [ngSrc]="assetsPath + article.image"
                      [title]="article.title"
                      [alt]="article.title"
                      width="1216"
                      height="640"
                    />
                  </a>
                }
              </div>
            </div>
          }
        </div>
      </div>

      <div class="col-span-12">
        <div class="justify-start items-center gap-[27px] flex">
          <div class="justify-start items-center flex gap-8">
            <div (click)="prevSlide()"
                 class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] cursor-pointer">
              <ng-icon name="heroArrowLeft"></ng-icon>
            </div>
            <div class="text-[#dde1e6] text-base font-normal font-['Tektur'] leading-[23px] tracking-wide">
              {{ currentSlideIndex + 1 }} / {{ articles.length }}
            </div>
            <div (click)="nextSlide()"
                 class="w-[55px] h-[55px] flex justify-center items-center border border-[#dde1e6] cursor-pointer">
              <ng-icon name="heroArrowRight"></ng-icon>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12 pt-10">
        <div class="flex flex-col gap-8 lg:flex-row justify-between max-lg:items-center w-full">
          <div class="text-center max-md:cols-span-12 max-md:text-start"><span
            class="text-[#216df9] text-[54px] font-bold font-['Tektur'] leading-[70.26px] tracking-widest max-md:text-[46px]"
            i18n>THEY MADE IT!</span><span
            class="text-black text-[54px] font-bold font-['Tektur'] leading-[70.26px] tracking-widest"> </span><span
            class="text-[#ffd000] text-[54px] font-bold font-['Tektur'] leading-[70.26px] tracking-widest max-md:text-[46px]"
            i18n>WILL YOU?</span>
          </div>
          <div
            class="max-w-[429px] lg:flex-1 h-[69px] px-[18px] bg-[#1f2024] justify-center items-center gap-[7px] inline-flex ">
            <div class="text-center text-[#f7f8f7] text-2xl font-medium font-['Tektur'] leading-loose tracking-[2.88px] max-xl:text-xl"
                 i18n>
              BUY PICKUP TRUCK
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [
    NgIcon,
    SafePipe,
    YouTubePlayer,
    NgOptimizedImage
  ],
  host: {
    class: `w-full bg-white p-10 py-36 flex flex-col gap-8 items-center justify-center max-md:py-16 max-md:px-2.5 max-xl:pb-0`
  }
})
export class TheyBoughtUsCarsComponent implements OnInit {

  public readonly assetsPath: string = '/assets/images/home/stories/';

  public readonly articles: Array<{
    title: string,
    details: string,
    href: string,
    image: string
    videoId?: string;
  }> = [
    {
      title: 'Adam from USA',
      details: 'Adam always wanted to help Ukraine with a tangible donation. In February 2023, he came to Donbas and personally donated two trucks to soldiers.',
      href: 'https://www.youtube.com/watch?v=z8pCibdfCkY',
      image: '1-adam.jpg',
      videoId: 'z8pCibdfCkY',
    },
    {
      title: 'British Business Bought us Truck',
      details: 'UK\'s SUV Prestige dealership purchased an L200 pickup, organized a volunteer convoy to Lviv, and toured shops and the city, creating a compelling story.',
      href: 'https://www.youtube.com/watch?v=G6rE1wfWpT8',
      image: '3-british-business.jpg',
      videoId: 'G6rE1wfWpT8',
    },
    {
      title: 'Edward and Hugh from South Africa',
      details: 'Born in South Africa and raised in a British-Canadian community, Edward and Hugh personally brought a pickup truck that now defends Ukraine in the East.',
      href: 'https://twitter.com/carforukraine/status/1743748880808779951',
      image: '4-edward-and-hugh.jpg'
    },
    {
      title: 'Martin Buhr - Vacation in Ukraine',
      details: 'Excited to help Ukraine firsthand, Martin spent his September 2023 vacation bringing a truck to aid in demining efforts.',
      href: 'https://tallmartin.substack.com/p/coda-my-truck-heads-to-the-russo?utm_source=profile&utm_medium=reader2',
      image: '2-martin-buhr.jpg'
    },
  ];

  @ViewChild('scrollContainer', {static: false})
  scrollContainer!: ElementRef<HTMLDivElement>;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly screenWidth = signal<number>(0);

  public readonly playerWidth: Signal<number | undefined> = computed(() => {
    if (this.screenWidth() < 400) {
      return 350;
    } else if (this.screenWidth() < 768) {
      return 410;
    }
    return undefined;
  });

  public readonly playerHeight: Signal<number | undefined> = computed(() =>
    this.screenWidth() < 768 ? 360 : undefined
  );

  public currentSlideIndex = 0;
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  public currentArticle = this.articles[this.currentSlideIndex];


  ngOnInit(): void {
    if (this.isBrowser) {
      this.screenWidth.set(window.innerWidth);
      window.addEventListener("resize", () => {
        this.screenWidth.set(window.innerWidth);
      });
    }
  }

  public nextSlide(): void {
    if (this.currentSlideIndex < this.articles.length - 1) {
      this.currentSlideIndex++;
      this.updateCurrentArticle();
    }
  }

  public prevSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.updateCurrentArticle();
    }
  }

  private updateCurrentArticle(): void {
    this.currentArticle = this.articles[this.currentSlideIndex];
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

