import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-our-initiative-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="text-4xl font-bold font-tektur" i18n>
          Our Initiative
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6 font-tektur max-w-md text-base text-mainColor" i18n>
        All the achievements this project has wouldn’t be
        possible with people behind it.
      </div>
      <div class="col-span-12"></div>
      <div class="col-span-12 lg:col-span-5 justify-center flex flex-col gap-4">
        <div class="font-tektur max-w-md text-mainColor text-base" i18n>
          People from from totally different industries like IT or logistics, education or media PR have united with a
          common mission and a common wish.
        </div>
        <div class="font-tektur max-w-md text-mainColor text-base" i18n>Since day 1 of the full scale invasion our warriors require mobility.
          Together with over 250 volunteers from all over the globe we are committed to serve our heroes and provide
          them 4x4 and other cars for as long as it takes.
        </div>
        <button aria-label="Open" i18n-aria-label="Open"
          class="md:mt-8 w-[312px] h-[66px] px-[18px] border-2 border-[#1f2024] justify-center items-center gap-[7px] inline-flex">
          <a href="/about" target="_self" class="text-center text-[#1f2024] text-2xl font-medium font-tektur leading-loose tracking-[2.88px] cursor-pointer" i18n>
            MEET OUR TEAM
          </a>
        </button>
      </div>
      <div class="col-span-7 max-md:col-span-12 portrait:max-xl:col-span-12">
        <img class="w-full h-[500px] max-md:h-auto rounded-lg object-cover" src="assets/images/team.jpg" alt=""/>
      </div>

      <div class="col-span-12 p-8 gap-8 mt-12 bg-[#1f2024] rounded-xl flex flex-wrap justify-around items-center [&>div>div]:font-tektur [&>div]:max-md:w-full">

        <div>
          <div class=" text-[#8895a4] text-sm font-medium uppercase tracking-wide" i18n>
            since
          </div>
          <div class=" text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            2022
          </div>
        </div>
        <div>
          <div class=" text-[#8895a4] text-sm font-medium uppercase tracking-wide" i18n>
            volonteers
          </div>
          <div class="text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            250+
          </div>
        </div>
        <div>
          <div class="text-[#8895a4] text-sm font-medium uppercase tracking-wide" i18n>
            countries
          </div>
          <div
            class="text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            30+
          </div>
        </div>
        <div>
          <div class="text-[#8895a4] text-sm font-medium uppercase tracking-wide" i18n>
            cars delivered
          </div>
          <div class="text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            473
          </div>
        </div>
        <div>
          <div class="text-[#8895a4] text-sm font-medium uppercase tracking-wide" i18n>
            WORTH OF TRUCKS
          </div>
          <div class="text-[#dde1e6] text-6xl font-bold leading-[78.07px] tracking-widest">
            $3.84M
          </div>
        </div>
      </div>
    </div>
  `,
  host: {
    class: `w-full bg-[#F7F8F7] p-10 flex flex-col gap-8 items-center justify-center max-md:p-16 max-md:px-2.5`
  }
})
export class OurInitiativeComponent {

}
