import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  state => state.items
);

export const selectTotalItems = createSelector(
  selectCartItems,
  items => items.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectTotalPrice = createSelector(
  selectCartItems,
  items => items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
);

export const selectIsInCart = (productId: number) => createSelector(
  selectCartItems,
  items => items.some(i => i.product.id === productId)
);

export const selectItemQuantity = (productId: number) => createSelector(
  selectCartItems,
  items => items.find(i => i.product.id === productId)?.quantity ?? 0
);