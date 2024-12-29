import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-media-about-us-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="text-4xl font-bold font-tektur">Media about us</div>
      </div>
      <div class="col-span-6 font-tektur">
        Every story published brings us one step closer to our shared  victory. Thank you!
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
export class MediaAboutUsComponent {

}