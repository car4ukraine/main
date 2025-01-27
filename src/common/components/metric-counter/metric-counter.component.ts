import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  Input,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { isPlatformServer} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-metric-counter',
  template: `
    <span class="value" #metricCounterElement>0</span>
  `,
  encapsulation: ViewEncapsulation.None,
  imports: [

  ],
  host: {
    class: 'flex'
  }
})
export class MetricCounterComponent implements AfterViewInit {
  @ViewChild('metricCounterElement', {static: true}) metricCounterElement!: ElementRef;

  @Input()
  public value = 1000;

  @Input()
  public precision = 0;

  @Input()
  private speed = 2000; // Загальна тривалість анімації в мс

  public currency = input<string | null>();

  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    this.animateCounter();
  }

  animateCounter() {

    if (isPlatformServer(this.platformId)) {
      return;
    }

    const counter = this.metricCounterElement.nativeElement;
    const totalValue = this.value;
    const duration = this.speed;

    let currentValue = 0;
    let startTime: number | null = null;

    const easingFunction = (progress: number): number => {
      // Ефект поступового прискорення і сповільнення (easing)
      return progress < 0.5
        ? 8 * progress * progress * progress // Прискорення
        : 1 - Math.pow(-2 * progress + 2, 3) / 20; // Сповільнення
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1); // Обмежуємо progress до 1

      currentValue = totalValue * easingFunction(progress);

      this.renderer.setProperty(
        counter,
        'innerText',
        currentValue.toFixed(this.precision)
      );

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Останнє оновлення для точної відповідності значенню
        this.renderer.setProperty(
          counter,
          'innerText',
          this.currency() ? this.transform(totalValue) : totalValue
        );
      }
    };

    window.requestAnimationFrame(step);
  }

  transform(value: number, currency: string = '$'): string {
    if (!value) return '0';

    const absValue = Math.abs(value);
    let formattedValue = '';
    let suffix = '';

    if (absValue >= 1_000_000_000) {
      formattedValue = (value / 1_000_000_000).toFixed(2);
      suffix = 'B'; // Billion
    } else if (absValue >= 1_000_000) {
      formattedValue = (value / 1_000_000).toFixed(2);
      suffix = 'M'; // Million
    } else if (absValue >= 1_000) {
      formattedValue = (value / 1_000).toFixed(2);
      suffix = 'K'; // Thousand
    } else {
      formattedValue = value.toString();
    }

    return `${currency}${formattedValue}${suffix}`;
  }
}
