import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortConfig, SortField, SortOrder } from '../../models/product.model';

@Component({
  selector: 'app-sort-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort-controls.component.html',
  styleUrls: ['./sort-controls.component.scss']
})
export class SortControlsComponent {
  @Output() sortChange = new EventEmitter<SortConfig | null>();
  activeField = signal<SortField | null>(null);
  activeOrder = signal<SortOrder>('asc');

  setSort(field: SortField, order: SortOrder): void {
    if (this.activeField() === field && this.activeOrder() === order) {
      this.activeField.set(null);
      this.sortChange.emit(null);
    } else {
      this.activeField.set(field);
      this.activeOrder.set(order);
      this.sortChange.emit({ field, order });
    }
  }

  isActive(field: SortField, order: SortOrder): boolean {
    return this.activeField() === field && this.activeOrder() === order;
  }
}