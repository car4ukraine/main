import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {PageMetaService} from '../../common/services/page-meta/page-meta.service';

@Component({
  selector: 'app-home-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <app-hero-section/>
    <app-spotlight-section/>
    <app-steps-section/>
    <app-stories-section/>
    <app-ongoing-fundraiser-section/>
    <app-donated-vehicles-section/>
    <app-social-media-section/>
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

