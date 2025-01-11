import { Component } from '@angular/core';
import { PageMetaService } from '../../common/services/page-meta/page-meta.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  standalone: true,
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {
  readonly title: string = `FAQ Page of Car for Ukraine - Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);

  }
  infoMail = 'info@car4ukraine.com'
}

export default FaqPageComponent;
