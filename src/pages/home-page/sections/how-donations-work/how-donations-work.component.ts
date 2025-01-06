import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-how-donations-work-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="w-full rounded-lg bg-gradient-to-b from-[#d4d8dc] to-[#f3f4f6] grid grid-cols-12 gap-4 p-12">


          <div class="flex flex-col gap-8 col-span-12 lg:col-span-6">
            <div class="text-[#1F2125] text-xl font-tektur flex flex-col gap-8">
              <p i18n>
                Hundreds of people from every corner of the globe have bough for us, donated or sold their cars to give
                wheels to our warriors.
              </p>

              <p i18n>
                A car donation saves up to 75% of the cost, leaving only logistics, armoring, and maintenance to cover.
                More than half of the cars we deploy come as direct donations, and this number is growing. Check these
                incredible stories.
              </p>
            </div>
            <button aria-label="Open" i18n-aria-label="Open" class="bg-[#1f2024] max-w-[305px] text-[#F7F8F7] flex justify-center items-center text-center font-tektur text-2xl p-4 p-2 max-md:hidden cursor-pointer" i18n>
              WATCH STORIES
            </button>
          </div>

          <div class="col-span-12 lg:col-span-1"></div>

          <div class="col-span-12 lg:col-span-5">
            <img ngSrc="assets/images/home/how-donations-work/map.svg" class="max-w-full min-w-full" alt="" height="296" width="546">
            <button aria-label="Open" i18n-aria-label="Open" class="hidden bg-[#1f2024] max-w-[305px] text-[#F7F8F7] justify-center items-center text-center font-tektur text-2xl p-4 p-2 max-md:block max-md:w-full max-md:mt-10 cursor-pointer" i18n>
              WATCH STORIES
            </button>
          </div>
        </div>
      </div>

    </div>

  `,
  imports: [
    NgOptimizedImage
  ],
  host: {
    class: `w-full bg-white p-10 flex flex-col items-center justify-center text-white max-md:p-16 max-md:px-2.5`
  }
})
export class HowDonationsWorkComponent {

}
