import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-how-donations-work-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="w-full rounded-lg bg-gradient-to-b from-[#d4d8dc] to-[#f3f4f6] grid grid-cols-12 gap-4 p-12">


          <div class="flex flex-col gap-8 col-span-12 lg:col-span-6">
            <div class="text-black font-tektur flex flex-col gap-8">
              <p>
                Hundreds of people from every corner of the globe have bough for us, donated or sold their cars to give
                wheels to our warriors.
              </p>

              <p>
                A car donation saves up to 75% of the cost, leaving only logistics, armoring, and maintenance to cover.
                More than half of the cars we deploy come as direct donations, and this number is growing. Check these
                incredible stories.
              </p>
            </div>
            <button class="bg-[#1f2024] flex justify-center items-center text-center text-2xl p-4 p-2">
              WATCH STORIES
            </button>
          </div>

          <div class="col-span-12 lg:col-span-1"></div>

          <div class="col-span-12 lg:col-span-5">
            <img ngSrc="assets/images/home/how-donations-work/map.svg" class="max-w-full min-w-full" alt="" height="296" width="546">
          </div>

        </div>
      </div>

    </div>

  `,
  imports: [
    NgOptimizedImage
  ],
  host: {
    class: `w-full bg-white p-10 flex flex-col items-center justify-center text-white`
  }
})
export class HowDonationsWorkComponent {

}