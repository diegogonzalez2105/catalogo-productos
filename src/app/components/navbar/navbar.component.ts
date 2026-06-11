import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CartComponent } from '../cart/cart.component';
import { selectTotalItems } from '../../store/cart/cart.selectors';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, CartComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private readonly store = inject(Store);
  cartOpen = signal(false);
  totalItems$ = this.store.select(selectTotalItems);

  toggleCart(): void {
    this.cartOpen.update(v => !v);
  }
}