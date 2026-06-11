import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice
} from '../../store/cart/cart.selectors';
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart
} from '../../store/cart/cart.actions';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Output() close = new EventEmitter<void>();
  private readonly store = inject(Store);

  items$ = this.store.select(selectCartItems);
  totalItems$ = this.store.select(selectTotalItems);
  totalPrice$ = this.store.select(selectTotalPrice);

  add(product: Product): void {
    this.store.dispatch(addToCart({ product }));
  }

  remove(productId: number): void {
    this.store.dispatch(removeFromCart({ productId }));
  }

  decrease(productId: number): void {
    this.store.dispatch(decreaseQuantity({ productId }));
  }

  clear(): void {
    this.store.dispatch(clearCart());
  }
}