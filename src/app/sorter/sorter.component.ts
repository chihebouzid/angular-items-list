import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css'],
})
export class SorterComponent {
  @Input() items: any;
  @Output() sorted = new EventEmitter<any[]>();

  showDropdown = false;
  isOpen = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  sort(order: string) {
    let sortedItems = [...this.items];
    if (order === 'asc') {
      sortedItems.sort((a, b) => a.price - b.price);
    } else {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    this.sorted.emit(sortedItems);
  }
}
