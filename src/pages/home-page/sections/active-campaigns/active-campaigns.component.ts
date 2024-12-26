import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {MediaAboutUsComponent} from "../media-about-us/media-about-us.component";
import {TheyBoughtUsCarsComponent} from "../they-bought-us-cars/they-bought-us-cars.component";

@Component({
  standalone: true,
  selector: 'app-active-campaigns-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `

      <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

        <div class="col-span-12">
          <div class="text-4xl font-bold font-tektur">
            Active Campaigns
          </div>
        </div>
        <div class="col-span-6 font-tektur">
          It’s hard to help everyone but we do our best. Join a campaign you like and help us help these warriors.
        </div>
        <div class="col-span-12"></div>
        <div class="col-span-5">
          <div class="w-full grid grid-cols-3 gap-4">
            <div>asd</div>
            <div>eqwe</div>
            <div>asdas</div>
            <div>sdas</div>
            <div>zczx</div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="col-span-7">
          <img class="w-full h-[500px] rounded-lg" src="https://via.placeholder.com/1330x366"/>
        </div>

      </div>

  `,
  host: {
    class: `w-full bg-[#EAECED] p-10 flex flex-col items-center justify-center`
  }
})
export class ActiveCampaignsComponent {

}
