import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../../models/product.model';
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart
} from './cart.actions';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,

  on(addToCart, (state, { product }) => {
    const existing = state.items.find(i => i.product.id === product.id);
    if (existing) {
      return {
        ...state,
        items: state.items.map(i =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      };
    }
    return {
      ...state,
      items: [...state.items, { product, quantity: 1 }]
    };
  }),

  on(removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(i => i.product.id !== productId)
  })),

  on(decreaseQuantity, (state, { productId }) => {
    const item = state.items.find(i => i.product.id === productId);
    if (item?.quantity === 1) {
      return {
        ...state,
        items: state.items.filter(i => i.product.id !== productId)
      };
    }
    return {
      ...state,
      items: state.items.map(i =>
        i.product.id === productId
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    };
  }),

  on(clearCart, state => ({
    ...state,
    items: []
  }))
);