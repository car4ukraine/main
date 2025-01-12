import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { PageMetaService } from '../../common/services/page-meta/page-meta.service';
import {HeroSectionComponent} from "./sections/hero-section/hero-section.component";
import {ContributorsSectionComponent} from "./sections/contributors-section/contributors-section.component";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroSectionComponent,
    ContributorsSectionComponent
  ],
  standalone: true
})
export class AboutPageComponent {
  readonly title: string = `About Car for Ukraine Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}

export default AboutPageComponent;
