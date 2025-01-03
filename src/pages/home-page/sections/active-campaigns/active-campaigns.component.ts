import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, ViewEncapsulation} from "@angular/core";
import {CampaignApiService} from "../../../../api/campaign/campaign.api.service";
import {
  CampaignWidgetSingleApiService
} from "../../../../api/campaign-widget-single/campaign-widget-single.api.service";
import {ICampaignResponse} from "../../../../api/campaign/i.campaign.response";
import {SafePipe} from "safe-pipe";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {bootstrapHeart} from "@ng-icons/bootstrap-icons";
import {
  MainDonateButtonComponent
} from "../../../../common/components/buttons/main-donate-button/main-donate-button.component";

@Component({
  standalone: true,
  selector: 'app-active-campaigns-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="text-4xl font-bold font-tektur">
          Active Campaigns
        </div>
      </div>

      <div class="col-span-12">
        <div class="container">
          <div class="flex flex-wrap gap-4 pb-4">
            @if (campaigns) {

              @for (campaign of campaigns.data; track campaign.id) {

                <div class="md:max-w-xs w-full flex flex-col bg-white border shadow-sm rounded-xl">
                  <img class="w-full h-auto rounded-t-xl" [src]="campaign.photo_url" alt="Card Image"/>
                  <div class="flex flex-col h-full justify-between p-4">
                    <div class="flex flex-col gap-2">
                      <h3 class="text-lg font-bold text-gray-800">
                        {{ campaign.title }}
                      </h3>
                      <div>
                        @if (campaign.active) {
                          <div
                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {{ 'modules.badges.active' }}
                          </div>
                        } @else {
                          <div
                            class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {{ 'modules.badges.archived' }}
                          </div>

                        }
                      </div>
                      <div [innerHTML]="campaign.progress_bar_html | safe: 'html'"></div>
                      <div class="mt-1 text-gray-500" [innerHTML]="campaign.description | safe: 'html'"></div>
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
    NgIcon,
    MainDonateButtonComponent
  ],
  host: {
    class: `w-full bg-[#EAECED] p-10 py-36 flex flex-col items-center justify-center`
  }
})
export class ActiveCampaignsComponent implements OnInit {

  private readonly campaignApiService = inject(CampaignApiService);
  private readonly campaignWidgetSingleApiService = inject(CampaignWidgetSingleApiService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  protected campaigns: ICampaignResponse | null = null;

  public ngOnInit() {
    this.campaignApiService.documents().subscribe({
      next: (documents) => {
        console.log(documents);
        this.campaigns = documents;
        this.changeDetectorRef.detectChanges();
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.campaignWidgetSingleApiService.documents().subscribe({
      next: (documents) => {
        console.log(documents);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
