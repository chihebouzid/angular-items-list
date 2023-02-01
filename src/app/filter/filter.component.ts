import {
  Component,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @ViewChild('filters') filters!: ElementRef;
  @Output() filter = new EventEmitter<string>();

  selectedFilter = '';

  onSelected(): void {
    this.selectedFilter = this.filters.nativeElement.value;
    this.filter.emit(this.selectedFilter);
  }
}
