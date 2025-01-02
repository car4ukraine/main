import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {ContactUsComponent} from "../../../../common/components/contact-us/contact-us.component";
import {QuickDonationComponent} from "../../../../common/components/quick-donation/quick-donation.component";

@Component({
  standalone: true,
  selector: 'app-our-initiative-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="text-4xl font-bold font-tektur">
          Our Initiative
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6 font-tektur">
        Today our men at the frontline require mobility, and we are here with over 50 volunteers to serve them and
        liberate our nation.
      </div>
      <div class="col-span-12"></div>
      <div class="col-span-12 lg:col-span-5 justify-center flex flex-col gap-8">
        <div class="font-tektur">
          Our team has people from different industries with different backgrounds, but today we are united to serve our
          army.
          Today our men at the frontline require mobility, and we are here with over 50 volunteers to serve them and
          liberate our nation. Today our men at the frontline require mobility, and we are here with over 50 volunteers
          to serve them and liberate our nation.
        </div>
        <button
          class="w-[312px] h-[66px] px-[18px] border-2 border-[#1f2024] justify-center items-center gap-[7px] inline-flex">
          <div class="text-center text-[#1f2024] text-2xl font-medium font-tektur leading-loose tracking-[2.88px]">
            MEET OUR TEAM
          </div>
        </button>
      </div>
      <div class="hidden lg:block col-span-7">
        <img class="w-full h-[500px] rounded-lg" src="https://via.placeholder.com/1330x366"/>
      </div>

      <div class="col-span-12 p-8 gap-8 mt-12 bg-[#1f2024] rounded-xl flex flex-wrap justify-around items-center font-tektur">

        <div class="">
          <div
            class=" text-[#8895a4] text-sm font-medium uppercase tracking-wide">
            WORTH OF TRUCKS
          </div>
          <div
            class=" text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            $3.84M
          </div>
        </div>
        <div class="">
          <div
            class=" text-[#8895a4] text-sm font-medium uppercase tracking-wide">
            volonteers
          </div>
          <div
            class="text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            250+
          </div>
        </div>
        <div class="">
          <div
            class="text-[#8895a4] text-sm font-medium uppercase tracking-wide">
            cars delivered
          </div>
          <div
            class="text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            473
          </div>
        </div>
        <div class="">
          <div
            class="text-[#8895a4] text-sm font-medium uppercase tracking-wide">
            countries
          </div>
          <div
            class="text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            30+
          </div>
        </div>
        <div class="">
          <div
            class="text-[#8895a4] text-sm font-medium uppercase tracking-wide">
            since
          </div>
          <div
            class="text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            2022
          </div>
        </div>
      </div>

      <div class="flex-col lg:flex-row flex gap-4 justify-between col-span-12 mt-8">
        <app-contact-us-section-component/>

        <app-quick-donation/>
      </div>

    </div>

  `,
  imports: [
    ContactUsComponent,
    QuickDonationComponent
  ],
  host: {
    class: `w-full bg-[#EAECED] p-10 flex flex-col gap-8 items-center justify-center`
  }
})
export class OurInitiativeComponent {

}
