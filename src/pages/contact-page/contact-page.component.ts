import { Component } from '@angular/core';
import { PageMetaService } from '../../common/services/page-meta/page-meta.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  readonly title: string = `Contact Car for Ukraine Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}
