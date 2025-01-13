import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {PageMetaService} from '../../common/services/page-meta/page-meta.service';
import {ActiveCampaignsComponent} from "../home-page/sections/active-campaigns/active-campaigns.component";

@Component({
  selector: 'app-campaigns-page',
  templateUrl: './campaigns-page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ActiveCampaignsComponent
  ],
  standalone: true
})
export class CampaignsPage {
  readonly title: string = `About Car for Ukraine Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  constructor(private pageMetaService: PageMetaService) {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}

export default CampaignsPage;
