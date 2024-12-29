import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from "@angular/core";
import {MediaAboutUsComponent} from "../media-about-us/media-about-us.component";

@Component({
  standalone: true,
  selector: 'app-our-work-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="text-4xl font-bold font-tektur">Our Work</div>
      </div>
      <div class="col-span-6 font-tektur">
        Each car goes through a long process of logistics, armoring, and servicing before reaching the frontline."
      </div>
      <div class="col-span-12">

        <div class="relative w-full flex gap-6 snap-x overflow-x-auto h-[578px]">
          @for (file of files; track file.src) {

            <div class="snap-center shrink-0 h-[578px] relative">
              <img class="shrink-0 rounded-lg shadow-xl bg-white h-[578px] brightness-50" [src]="file.src">
              <div class="absolute top-0 left-0 font-tektur w-4/5 text-[28px] flex gap-2 p-8">
                <div>{{ $index }}.</div>
                <div class="text-wrap">
                  {{ file.title }}
                </div>
              </div>
            </div>
          }
        </div>
      </div>

    </div>

  `,
  host: {
    class: `w-full bg-[#1F2125] p-10 flex flex-col items-center justify-center text-white`
  }
})
export class OurWorkComponent {

  public readonly files = [
    {
      src: 'assets/images/home/donated-vehicles/v-01.jpg',
      title: `We source cars in the EU and UK`
    },
    {
      src: 'assets/images/home/donated-vehicles/v-02.jpg',
      title: `Deliver trucks to Ukraine`
    },
    {
      src: 'assets/images/home/donated-vehicles/v-03.jpg',
      title: `Repair and install armor`
    },
    {
      src: 'assets/images/home/donated-vehicles/v-04.jpg',
      title: `Paint and Brand`
    },
    {
      src: 'assets/images/home/donated-vehicles/v-05.jpg',
      title: `Deliver to the frontlines`
    },
    {
      src: 'assets/images/home/donated-vehicles/h-06.jpg',
      title: `Repeat...`
    },
  ];

}