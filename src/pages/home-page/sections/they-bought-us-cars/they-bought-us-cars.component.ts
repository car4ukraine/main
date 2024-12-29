import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {MediaAboutUsComponent} from "../media-about-us/media-about-us.component";

@Component({
  standalone: true,
  selector: 'app-they-bought-us-cars-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `

      <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

        <div class="col-span-12">
          <div class="text-4xl font-bold font-tektur">
            They Bought Us Cars
          </div>
        </div>
        <div class="col-span-6 font-tektur">
          From every corner of the globe people come to Ukraine in person to stand with us and show their support.
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

      <div class="w-[1327px] h-[70px] relative">
        <div class="w-[429px] h-[69px] left-[898px] top-0 absolute">
          <div class="w-[429px] h-[69px] px-[18px] left-0 top-0 absolute bg-[#1f2024] justify-center items-center gap-[7px] inline-flex">
            <div class="text-center text-[#f7f8f7] text-2xl font-medium font-['Tektur'] leading-loose tracking-[2.88px]">BUY PICKUP TRUCK</div>
          </div>
        </div>
        <div class="left-0 top-0 absolute text-center"><span class="text-[#216df9] text-[54px] font-bold font-['Tektur'] leading-[70.26px] tracking-widest">THEY MADE IT!</span><span class="text-black text-[54px] font-bold font-['Tektur'] leading-[70.26px] tracking-widest"> </span><span class="text-[#ffd000] text-[54px] font-bold font-['Tektur'] leading-[70.26px] tracking-widest">WILL YOU?</span></div>
      </div>

  `,
  host: {
    class: `w-full bg-white p-10 flex flex-col gap-8 items-center justify-center`
  }
})
export class TheyBoughtUsCarsComponent {

}
