import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {PageMetaService} from '../../common/services/page-meta/page-meta.service';

@Component({
  selector: 'app-home-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <app-hero-section/>

    <div class="w-full pb-10 bg-white flex flex-col items-center justify-center">

      <div class="grid grid-cols-12 gap-10 max-w-[1330px] w-full">

        <div class="col-span-6">
          Our team, united from various industries and backgrounds, stands together to protect our homeland. With over 50 volunteers, we’re here to provide the frontline with the mobility they need to defend and liberate our nation."
        </div>

        <div class="col-span-3 flex flex-col items-center">
          <div class="text-4xl font-bold">473</div>
          <div>CARS DELIVERED</div>
        </div>
        <div class="col-span-3 flex flex-col items-center">
          <div class="text-4xl font-bold">$3.84M</div>
          <div>WORTH OF TRUCKS</div>
        </div>

        <div class="col-span-12">
          <img class="w-full h-96 rounded-lg" src="https://via.placeholder.com/1330x366" />
        </div>

      </div>
    </div>

    <div class="w-full bg-[#EAECED] p-10 flex flex-col items-center justify-center">

      <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

        <div class="col-span-12">
          <div class="text-4xl font-bold">Media about us</div>
        </div>
        <div class="col-span-6">
          Our team, united from various industries and backgrounds, stands together to protect our homeland.
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
          <img class="w-full h-[500px] rounded-lg" src="https://via.placeholder.com/1330x366" />
        </div>

      </div>

    </div>

    <div class="w-full bg-[#1F2125] p-10 flex flex-col items-center justify-center text-white">

      <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

        <div class="col-span-12">
          <div class="text-4xl font-bold">Our Work</div>
        </div>
        <div class="col-span-6">
          Our team, united from various industries and backgrounds, stands together to protect our homeland.
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
          <img class="w-full h-[500px] rounded-lg" src="https://via.placeholder.com/1330x366" />
        </div>

      </div>

    </div>

    <div class="w-full bg-white p-10 flex flex-col items-center justify-center">

      <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

        <div class="col-span-12">
          <div class="text-4xl font-bold">
            They Bought Us Cars
          </div>
        </div>
        <div class="col-span-6">
          Our team, united from various industries and backgrounds, stands together to protect our homeland.
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
          <img class="w-full h-[500px] rounded-lg" src="https://via.placeholder.com/1330x366" />
        </div>

      </div>

    </div>

    <div class="w-full bg-[#EAECED] p-10 flex flex-col items-center justify-center ">

      <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

        <div class="col-span-12">
          <div class="text-4xl font-bold">
            Active Campaigns
          </div>
        </div>
        <div class="col-span-6">
          Our team, united from various industries and backgrounds, stands together to protect our homeland.
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
          <img class="w-full h-[500px] rounded-lg" src="https://via.placeholder.com/1330x366" />
        </div>

      </div>

    </div>

    <div class="w-full bg-[#1F2125] p-10 flex flex-col items-center justify-center text-white">

      <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

        <div class="col-span-12">
          <div class="text-4xl font-bold">
            Donated Vehicles
          </div>
        </div>
        <div class="col-span-6">
          Our team, united from various industries and backgrounds, stands together to protect our homeland.
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
          <img class="w-full h-[500px] rounded-lg" src="https://via.placeholder.com/1330x366" />
        </div>

      </div>

    </div>

    <div class="w-full bg-white p-10 flex flex-col items-center justify-center text-white">

      <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

        <div class="col-span-12">
          <img class="w-full h-[500px] rounded-lg" src="https://via.placeholder.com/1330x366" />
        </div>

      </div>

    </div>

<!--    <app-spotlight-section/>-->
<!--    <app-steps-section/>-->
<!--    <app-stories-section/>-->
<!--    <app-ongoing-fundraiser-section/>-->
<!--    <app-donated-vehicles-section/>-->
<!--  TODO: Fix social media section, because the section has some problem which block home page and program can replace the home page with another page  -->
<!--    <app-social-media-section/>-->
  `
})
export class HomePageComponent implements OnInit {

  readonly title: string = `Car for Ukraine - Volunteering Initiative`;
  readonly description: string = `At the Volunteering Initiative Car for Ukraine, we accept, upgrade, and deliver donated vehicles to the frontlines in Ukraine.`;

  private readonly pageMetaService = inject(PageMetaService);

  public ngOnInit() {
    this.pageMetaService.setTitleAndDescription(this.title, this.description);
  }
}

