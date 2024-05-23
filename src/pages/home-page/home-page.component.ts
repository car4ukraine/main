import { Component } from '@angular/core';
import { PageMetaService } from '../../common/services/page-meta/page-meta.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  readonly title: string = `Car for Ukraine - Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}

