import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-our-initiative-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `

      <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

        <div class="col-span-12">
          <div class="text-4xl font-bold font-tektur">
            Our Initiative
          </div>
        </div>
        <div class="col-span-6 font-tektur">
          Today our men at the frontline require mobility, and we are here with over 50 volunteers to serve them and liberate our nation.
        </div>
        <div class="col-span-12"></div>
        <div class="col-span-5 items-center flex">
          <div class="font-tektur">
            Our team has people from different industries with different backgrounds, but today we are united to serve our army.
            Today our men at the frontline require mobility, and we are here with over 50 volunteers to serve them and liberate our nation. Today our men at the frontline require mobility, and we are here with over 50 volunteers to serve them and liberate our nation.
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
export class OurInitiativeComponent {

}
