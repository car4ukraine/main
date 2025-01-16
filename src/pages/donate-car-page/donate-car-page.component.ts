import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
  Signal,
  signal,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {PageMetaService} from '../../common/services/page-meta/page-meta.service';
import {FaqSectionComponent} from "./sections/faq-section/faq-section.component";
import {YouTubePlayer} from "@angular/youtube-player";
import {isPlatformBrowser, NgClass, NgOptimizedImage} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {heroArrowLeft, heroArrowRight} from "@ng-icons/heroicons/outline";


@Component({
  selector: 'app-donate-car-page',
  templateUrl: './donate-car-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    provideIcons({
      heroArrowLeft,
      heroArrowRight
    })
  ],
  imports: [
    FaqSectionComponent,
    YouTubePlayer,
    ReactiveFormsModule,
    NgClass,
    NgOptimizedImage,
    NgIcon,
  ],
  standalone: true
})
export class DonateCarPageComponent implements OnInit {
  readonly title: string = `Donate Car to Ukraine`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly formBuilder = inject(FormBuilder);
  private readonly screenWidth = signal<number>(0);
  public donateForm: FormGroup;
  public selectedOption: string = '';
  public showSuccessAlert: boolean = false;
  public showErrorAlert: boolean = false;
  public readonly assetsPath: string = '/assets/images/home/stories/';
  public currentSlideIndex = 0;

  @ViewChild('donationForm')
  donationForm!: ElementRef<HTMLFormElement>;
  @ViewChild('scrollContainer', {static: false})
  scrollContainer!: ElementRef<HTMLDivElement>;

  public readonly article: Array<{
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
  public currentArticle = this.article[this.currentSlideIndex]

  constructor(
    private pageMetaService: PageMetaService
  ) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);

    if (this.isBrowser) {
      this.screenWidth.set(window.innerWidth);
    }

    this.donateForm = this.formBuilder.group({
      helpType: ['buyCar', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  public readonly articles: Array<{
    title: string,
    details: string,
    href: string,
    image: string
    videoId?: string;
  }> = [
    {
      title: 'British Business Bought us Truck',
      details: 'UK\'s SUV Prestige dealership purchased an L200 pickup, organized a volunteer convoy to Lviv, and toured shops and the city, creating a compelling story.',
      href: 'https://www.youtube.com/watch?v=G6rE1wfWpT8',
      image: '3-british-business.jpg',
      videoId: 'G6rE1wfWpT8',
    },
  ];

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

  ngOnInit(): void {
    if (this.isBrowser) {
      window.addEventListener("resize", () => {
        this.screenWidth.set(window.innerWidth);
      });
    }
  }

  public onSubmit() {
    this.resetAlerts();
    this.donateForm.markAllAsTouched();
    console.log(this.donateForm.value)
  }

  private resetAlerts(): void {
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
  }

  public selectOption(option: string) {
    this.selectedOption = option;
    this.donateForm.patchValue({helpType: option});
    this.donationForm.nativeElement.scrollIntoView({behavior: 'smooth'});
  }


  public getHelpTypeClass(type: string) {
    const helpType = this.donateForm.get('helpType')?.value;
    return {
      'bg-[#2452DD] text-white': helpType === type,
      'text-mainColor bg-[#DDE2E7]': helpType !== type,
    };
  }

  public nextSlide(): void {
    if (this.currentSlideIndex < this.article.length - 1) {
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
    this.currentArticle = this.article[this.currentSlideIndex];
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

  public getProgressPosition(): string {
    if (this.currentSlideIndex >= this.article.length - 1) {
      return `calc(100% - 10%)`;
    }

    const progress = (this.currentSlideIndex / (this.article.length - 1)) * 100;
    return `${progress}%`;
  }

}

export default DonateCarPageComponent;
