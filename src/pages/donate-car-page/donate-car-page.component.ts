import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { PageMetaService } from '../../common/services/page-meta/page-meta.service';
import {HeroSectionComponent} from "./sections/hero-section/hero-section.component";
import {VideosSectionComponent} from "./sections/videos-section/videos-section.component";
import {ContactSectionComponent} from "./sections/contact-section/contact-section.component";
import {FaqSectionComponent} from "./sections/faq-section/faq-section.component";

@Component({
  selector: 'app-donate-car-page',
  templateUrl: './donate-car-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroSectionComponent,
    VideosSectionComponent,
    ContactSectionComponent,
    FaqSectionComponent
  ],
  standalone: true
})
export class DonateCarPageComponent {
  readonly title: string = `Donate Car to Ukraine`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}

export default DonateCarPageComponent;
