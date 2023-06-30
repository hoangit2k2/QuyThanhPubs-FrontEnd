import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vndFormat'
})
export class VndFormatPipe implements PipeTransform {
  transform(value: number): string {
    const formattedValue = value.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
      currencyDisplay: 'symbol',
      minimumFractionDigits: 0
    });

    return formattedValue;
  }
}