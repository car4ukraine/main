import { Component } from '@angular/core';
import { PageMetaService } from '../../common/services/page-meta/page-meta.service';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrl: './thank-you-page.component.scss'
})
export class ThankYouPageComponent {
  readonly title: string = `Thank You Page of Car for Ukraine - Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}
