import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PriceDividerPipe implements PipeTransform {
  transform(items: any[], priceDivider: number): any[] {
    return (
      items &&
      items.map((item) => ({ ...item, price: item.price / priceDivider }))
    );
  }
}
