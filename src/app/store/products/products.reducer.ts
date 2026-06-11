import { createReducer, on } from '@ngrx/store';
import { Product, SortConfig } from '../../models/product.model';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  loadProductById,
  loadProductByIdSuccess,
  loadProductByIdFailure,
  setSortConfig
} from './products.actions';

export interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  sortConfig: SortConfig | null;
}

export const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
  sortConfig: null
};

export const productsReducer = createReducer(
  initialState,

  on(loadProducts, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false
  })),

  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(loadProductById, state => ({
    ...state,
    loading: true,
    error: null,
    selectedProduct: null
  })),

  on(loadProductByIdSuccess, (state, { product }) => ({
    ...state,
    selectedProduct: product,
    loading: false
  })),

  on(loadProductByIdFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(setSortConfig, (state, { config }) => ({
    ...state,
    sortConfig: config
  }))
);