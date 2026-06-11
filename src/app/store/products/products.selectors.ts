import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  state => state.products
);

export const selectSelectedProduct = createSelector(
  selectProductsState,
  state => state.selectedProduct
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  state => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  state => state.error
);

export const selectSortConfig = createSelector(
  selectProductsState,
  state => state.sortConfig
);

export const selectSortedProducts = createSelector(
  selectAllProducts,
  selectSortConfig,
  (products, config) => {
    const list = [...products];
    if (!config) return list;
    return list.sort((a, b) =>
      config.order === 'asc'
        ? a[config.field] - b[config.field]
        : b[config.field] - a[config.field]
    );
  }
);