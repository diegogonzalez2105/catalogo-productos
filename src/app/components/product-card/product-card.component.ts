import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { addToCart } from '../../store/cart/cart.actions';
import { selectIsInCart, selectItemQuantity } from '../../store/cart/cart.selectors';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CarouselComponent],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  private readonly store = inject(Store);

  isInCart$ = this.store.select(selectIsInCart(this.product?.id));
  itemQuantity$ = this.store.select(selectItemQuantity(this.product?.id));

  ngOnInit(): void {
    this.isInCart$ = this.store.select(selectIsInCart(this.product.id));
    this.itemQuantity$ = this.store.select(selectItemQuantity(this.product.id));
  }

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.store.dispatch(addToCart({ product: this.product }));
  }

  getDiscountedPrice(): number {
    return this.product.price * (1 - this.product.discountPercentage / 100);
  }

  getStars(): number[] {
    return [1, 2, 3, 4, 5];
  }
}