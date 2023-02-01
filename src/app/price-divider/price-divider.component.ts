import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-divider',
  templateUrl: './price-divider.component.html',
  styleUrls: ['./price-divider.component.css'],
})
export class PriceDividerComponent {
  priceDivider = 1;

  @Output() priceDividerChange = new EventEmitter<number>();

  onPriceDividerChange() {
    this.priceDividerChange.emit(this.priceDivider);
  }
}
