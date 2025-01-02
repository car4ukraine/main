import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {PageMetaService} from '../../common/services/page-meta/page-meta.service';
import {HeroSectionComponent} from "./sections/hero-section/hero-section.component";
import {NgOptimizedImage} from "@angular/common";
import {MediaAboutUsComponent} from "./sections/media-about-us/media-about-us.component";
import {OurWorkComponent} from "./sections/our-work/our-work.component";
import {TheyBoughtUsCarsComponent} from "./sections/they-bought-us-cars/they-bought-us-cars.component";
import {ActiveCampaignsComponent} from "./sections/active-campaigns/active-campaigns.component";
import {DonatedVehiclesComponent} from "./sections/donated-vehicles/donated-vehicles.component";
import {OurInitiativeComponent} from "./sections/our-initiative/our-initiative.component";
import {SubHeroComponent} from "./sections/sub-hero/sub-hero.component";
import {HowDonationsWorkComponent} from "./sections/how-donations-work/how-donations-work.component";

@Component({
  selector: 'app-home-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    HeroSectionComponent,
    NgOptimizedImage,
    MediaAboutUsComponent,
    OurWorkComponent,
    TheyBoughtUsCarsComponent,
    ActiveCampaignsComponent,
    DonatedVehiclesComponent,
    OurInitiativeComponent,
    SubHeroComponent,
    HowDonationsWorkComponent
  ],
  template: `
    <app-hero-section/>

    <app-sub-hero-section-component/>

    <app-media-about-us-section-component/>

    <app-our-work-section-component/>

    <app-they-bought-us-cars-section-component/>

    <app-active-campaigns-section-component/>

    <app-donated-vehicles-section-component/>

    <app-how-donations-work-section-component/>

    <app-our-initiative-section-component/>

    <!--  TODO: Fix social media section, because the section has some problem which block home page and program can replace the home page with another page  -->
    <!--    <app-social-media-section/>-->
  `
})
export class HomePageComponent implements OnInit {

  readonly title: string = `Car for Ukraine - Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  private readonly pageMetaService = inject(PageMetaService);

  public ngOnInit() {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}

export default HomePageComponent;

