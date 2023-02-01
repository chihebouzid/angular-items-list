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
  @ViewChild('teams') teams!: ElementRef;
  @Output() filter = new EventEmitter<string>();

  selectedTeam = '';

  onSelected(): void {
    this.selectedTeam = this.teams.nativeElement.value;
    this.filter.emit(this.selectedTeam);
  }
}
