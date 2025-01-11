import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {HeroSectionComponent} from "../hero-section/hero-section.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-sub-hero-section-component',
  imports: [
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `


      <div class="grid grid-cols-12 max-md:flex max-md:flex-wrap gap-10 max-w-[1330px] w-full max-md:justify-between">

        <div class="col-span-12 lg:col-span-6 text-xl font-tektur text-mainColor max-md:order-4" i18n>
          Since 2022 we’ve been asking our soldiers what they need the most. Some need drones, other medical equipment,
          but the one common need for every unit no matter where they serve are reliable cars.
        </div>

        <div class="col-span-3 flex flex-col items-center font-tektur max-md:order-1">
          <div class="text-6xl font-bold text-[#323232]">473</div>
          <div class="text-mainColor font-medium text-sm" i18n>CARS DEPLOYED</div>
        </div>
        <div class="col-span-3 flex flex-col items-center font-tektur max-md:order-2 max-md:items-start">
          <div class="text-6xl font-bold text-[#323232] max-md:text-6xl">$3.84M</div>
          <div class="text-mainColor font-medium text-sm" i18n>WORTH OF CARS</div>
        </div>

        <div class="col-span-12 px max-md:order-3">
          <img class="w-full max-h-96 rounded-lg" height="374" width="900"
               ngSrc="assets/page/home/section/about-us/banner.jpg"/>
        </div>

      </div>

  `,
  host: {
    class: `w-full p-10 bg-white flex flex-col items-center justify-center  max-md:px-2.5`
  }
})
export class SubHeroComponent {

}
