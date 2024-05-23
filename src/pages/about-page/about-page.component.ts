import { Component } from '@angular/core';
import { PageMetaService } from '../../common/services/page-meta/page-meta.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  readonly title: string = `About Car for Ukraine Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}
