import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { PageMetaService } from '../../common/services/page-meta/page-meta.service';
import {ContactUsComponent} from "../../common/components/contact-us/contact-us.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ContactUsComponent,
  ],
  standalone: true
})
export class ContactPageComponent {
  readonly title: string = `Contact Car for Ukraine Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}

export default ContactPageComponent;
