import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'currencyShorten',
  standalone: true
})
export class CurrencyShortenPipe implements PipeTransform {
  transform(value: number, currency: string = '$', decimals: number = 2): string {
    if (!value && value !== 0) return '';

    let formattedValue: string;
    if (value >= 1_000_000_000) {
      formattedValue = (value / 1_000_000_000).toFixed(decimals) + 'B';
    } else if (value >= 1_000_000) {
      formattedValue = (value / 1_000_000).toFixed(decimals) + 'M';
    } else if (value >= 1_000) {
      formattedValue = (value / 1_000).toFixed(decimals) + 'K';
    } else {
      formattedValue = value.toFixed(decimals);
    }

    return `${currency}${formattedValue}`;
  }
}
