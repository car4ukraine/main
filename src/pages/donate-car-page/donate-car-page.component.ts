import { Component } from '@angular/core';
import { PageMetaService } from '../../common/services/page-meta/page-meta.service';

@Component({
  selector: 'app-donate-car-page',
  templateUrl: './donate-car-page.component.html',
  styleUrl: './donate-car-page.component.scss'
})
export class DonateCarPageComponent {
  readonly title: string = `Donate Car to Ukraine`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}
