import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SortControlsComponent } from '../sort-controls/sort-controls.component';
import { loadProducts, setSortConfig } from '../../store/products/products.actions';
import {
  selectSortedProducts,
  selectProductsLoading,
  selectProductsError
} from '../../store/products/products.selectors';
import { SortConfig } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SortControlsComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private readonly store = inject(Store);

  products$ = this.store.select(selectSortedProducts);
  loading$ = this.store.select(selectProductsLoading);
  error$ = this.store.select(selectProductsError);

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  onSortChange(config: SortConfig | null): void {
    this.store.dispatch(setSortConfig({ config }));
  }
}