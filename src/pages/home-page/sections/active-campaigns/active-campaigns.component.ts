import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, ViewEncapsulation} from "@angular/core";
import {CampaignApiService} from "../../../../api/campaign/campaign.api.service";
import {
  CampaignWidgetSingleApiService
} from "../../../../api/campaign-widget-single/campaign-widget-single.api.service";
import {ICampaignResponse} from "../../../../api/campaign/i.campaign.response";
import {SafePipe} from "safe-pipe";
import {
  MainDonateButtonComponent
} from "../../../../common/components/buttons/main-donate-button/main-donate-button.component";
import {Router} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-active-campaigns-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12 max-lg:mt-8">
        <div [ngClass]="getClassByTitle()" class="text-5xl font-bold font-tektur text-[#323232] max-lg:text-5xl pb-4" i18n>
          {{ title }}
        </div>
        <div class="col-span-8 text-xl font-tektur text-mainColor pb-4" i18n>
          {{ description }}
        </div>
      </div>
      <div class="col-span-12">
        <div class="container">
          <div class="flex flex-wrap gap-4 pb-4 justify-center">
            @if (campaigns) {
              @for (campaign of (route.url === '/' ? campaigns.data.slice(0, 3) : campaigns.data); track campaign.id) {
                <div class="max-w-[422px] w-full flex flex-col bg-white rounded-xl max-md:bg-[#EAECED]">
                  <img class="w-full h-[237px] rounded-xl" [src]="campaign.photo_url" alt="Card Image"/>
                  <div class="flex flex-col h-full justify-between">
                    <div class="flex flex-col gap-2">
                      <div [innerHTML]="campaign.progress_bar_html | safe: 'html'"></div>
                      <div class="mt-1 text-gray-500 font-tektur max-xl:line-clamp-3"
                           [innerHTML]="campaign.description | safe: 'html'"></div>
                    </div>
                    <app-main-donate-button/>
                  </div>
                </div>
              }
            }
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [
    SafePipe,
    MainDonateButtonComponent,
    NgClass
  ],
  host: {
    class: `w-full p-10 py-36 flex flex-col items-center justify-center max-md:p-16 max-md:px-2.5 max-md:bg-[#EAECED]`
  }
})
export class ActiveCampaignsComponent implements OnInit {

  private readonly campaignApiService = inject(CampaignApiService);
  private readonly campaignWidgetSingleApiService = inject(CampaignWidgetSingleApiService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  protected campaigns: ICampaignResponse | null = null;
  protected readonly route = inject(Router);
  public title: string = 'Active Campaigns';
  public description: string = 'It’s hard to help everyone but we do our best. Join a campaign you like and help us help these warriors.';

  public ngOnInit() {
    this.campaignApiService.documents().subscribe({
      next: (documents) => {
        this.campaigns = documents;
        this.changeDetectorRef.detectChanges();
      },
      error: (error) => {
        console.log(error);
      }
    });
    if (this.route.url === '/') {
      this.title = 'Active Campaigns';
    } else if (this.route.url === '/campaigns') {
      this.title = 'Campaigns'
      this.description = 'All the achievements this project has would’t be possible with people behind it.'
    }
    this.campaignWidgetSingleApiService.documents().subscribe({
      next: (documents) => {
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  public getClassByTitle() {
    if (this.title === 'Campaigns') {
      return 'text-8xl';
    }
    return '';
  }
}
