import {ChangeDetectionStrategy, Component, inject, OnInit, signal, ViewEncapsulation} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {MetricCounterComponent} from "../../../../common/components/metric-counter/metric-counter.component";
import {MetricApiService} from "../../../../api/metric/metric.api.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {IMetric} from "../../../../api/metric/i.metric.response";

@Component({
  standalone: true,
  selector: 'app-sub-hero-section-component',
  imports: [
    NgOptimizedImage,
    MetricCounterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `

    <div class="grid grid-cols-12 max-md:flex max-md:flex-wrap gap-12 max-w-[1330px] w-full max-md:justify-between">

      <div class="col-span-12 lg:col-span-6 text-xl font-tektur text-mainColor max-md:order-4" i18n>
        Since 2022 we’ve been asking our soldiers what they need the most. Some need drones, other medical equipment,
        but the one common need for every unit no matter where they serve are reliable cars.
      </div>

      <div class="col-span-3 flex flex-col items-center font-tektur max-md:order-1">
        <div class="text-5xl md:text-6xl font-bold text-[#323232]">
          @if (metric()?.cars; as cars) {
            <app-metric-counter [value]="cars"/>
          }
        </div>
        <div class="text-mainColor font-medium text-sm" i18n>CARS DEPLOYED</div>
      </div>
      <div class="col-span-3 flex flex-col items-center font-tektur max-md:order-2 max-md:items-start">
        <div class="text-5xl md:text-6xl font-bold text-[#323232]">

          @if (metric()?.money; as money) {
            <app-metric-counter [value]="money" [currency]="metric()?.currency"/>
          }
        </div>
        <div class="text-mainColor font-medium text-sm" i18n>WORTH OF CARS</div>
      </div>

      <div class="col-span-12 px max-md:order-3">
        <img class="w-full max-h-96 rounded-lg" height="374" width="900"
             ngSrc="assets/page/home/section/about-us/banner.jpg"/>
      </div>

    </div>

  `,
  host: {
    class: `w-full md:p-10 md:py-12 bg-white flex flex-col items-center justify-center max-md:px-2.5 mb-12`
  }
})
export class SubHeroComponent implements OnInit {

  public readonly metric = signal<IMetric | null>(null);

  private readonly metricApiService = inject(MetricApiService);

  public ngOnInit() {
    console.log('SubHeroComponent.ngOnInit');
    this.metricApiService.execute().subscribe((metric) => {
      this.metric.set(metric.data);
    });
  }

}
