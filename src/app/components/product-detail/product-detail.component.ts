import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { CarouselComponent } from '../carousel/carousel.component';
import { loadProductById } from '../../store/products/products.actions';
import {
  selectSelectedProduct,
  selectProductsLoading,
  selectProductsError
} from '../../store/products/products.selectors';
import {
  selectIsInCart,
  selectItemQuantity
} from '../../store/cart/cart.selectors';
import {
  addToCart,
  removeFromCart
} from '../../store/cart/cart.actions';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CarouselComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly store = inject(Store);

  product$ = this.store.select(selectSelectedProduct);
  loading$ = this.store.select(selectProductsLoading);
  error$ = this.store.select(selectProductsError);

  isInCart$ = this.product$.pipe();
  itemQuantity$ = this.product$.pipe();

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(loadProductById({ id }));
  }

  getDiscountedPrice(product: Product): number {
    return product.price * (1 - product.discountPercentage / 100);
  }

  getStars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  addToCart(product: Product): void {
    this.store.dispatch(addToCart({ product }));
  }

  removeFromCart(productId: number): void {
    this.store.dispatch(removeFromCart({ productId }));
  }

  isInCart(productId: number) {
    return this.store.select(selectIsInCart(productId));
  }

  itemQuantity(productId: number) {
    return this.store.select(selectItemQuantity(productId));
  }
}