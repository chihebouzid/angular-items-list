import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: any;
  filteredItems: any;
  priceDivider = 1;

  constructor(private dataServiceService: DataServiceService) {}

  ngOnInit() {
    this.dataServiceService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  updateItems(items: any[]) {
    this.items = items;
  }

  onFilter(selectedOption: string) {
    this.dataServiceService.getItems().subscribe((data) => {
      this.items =
        selectedOption === 'All'
          ? data
          : data.filter(
              (el: any) => el.isEdible === (selectedOption === 'Edible')
            );
    });
  }

  dividePriceBy(priceDivider: number) {
    this.priceDivider = priceDivider;
  }
}
