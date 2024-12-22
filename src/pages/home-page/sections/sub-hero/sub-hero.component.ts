import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {HeroSectionComponent} from "../hero-section/hero-section.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-sub-hero-section-component',
  imports: [
    HeroSectionComponent,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `


      <div class="grid grid-cols-12 gap-10 max-w-[1330px] w-full">

        <div class="col-span-6 font-tektur">
          Our team, united from various industries and backgrounds, stands together to protect our homeland. With over
          50 volunteers, we’re here to provide the frontline with the mobility they need to defend and liberate our
          nation."
        </div>

        <div class="col-span-3 flex flex-col items-center font-tektur">
          <div class="text-4xl font-bold">473</div>
          <div>CARS DELIVERED</div>
        </div>
        <div class="col-span-3 flex flex-col items-center font-tektur">
          <div class="text-4xl font-bold">$3.84M</div>
          <div>WORTH OF TRUCKS</div>
        </div>

        <div class="col-span-12">
          <img class="w-full max-h-96 rounded-lg" height="374" width="900"
               ngSrc="assets/page/home/section/about-us/banner.jpg"/>
        </div>

      </div>

  `,
  host: {
    class: `w-full pb-10 bg-white flex flex-col items-center justify-center`
  }
})
export class SubHeroComponent {

}
