import { createAction, props } from '@ngrx/store';
import { Product, SortConfig } from '../../models/product.model';

export const loadProducts = createAction('[Products] Load Products');

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

export const loadProductById = createAction(
  '[Products] Load Product By Id',
  props<{ id: number }>()
);

export const loadProductByIdSuccess = createAction(
  '[Products] Load Product By Id Success',
  props<{ product: Product }>()
);

export const loadProductByIdFailure = createAction(
  '[Products] Load Product By Id Failure',
  props<{ error: string }>()
);

export const setSortConfig = createAction(
  '[Products] Set Sort Config',
  props<{ config: SortConfig | null }>()
);