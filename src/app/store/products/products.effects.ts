import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  loadProductById,
  loadProductByIdSuccess,
  loadProductByIdFailure
} from './products.actions';

export const loadProductsEffect = createEffect(
  (
    actions$ = inject(Actions),
    productService: ProductService = inject(ProductService)
  ) =>
    actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        productService.getProducts(30).pipe(
          map(response => loadProductsSuccess({ products: response.products })),
          catchError((error: Error) =>
            of(loadProductsFailure({ error: error.message ?? 'Error desconocido' }))
          )
        )
      )
    )
);

export const loadProductByIdEffect = createEffect(
  (
    actions$ = inject(Actions),
    productService: ProductService = inject(ProductService)
  ) =>
    actions$.pipe(
      ofType(loadProductById),
      mergeMap(({ id }) =>
        productService.getProductById(id).pipe(
          map((product: Product) => loadProductByIdSuccess({ product })),
          catchError((error: Error) =>
            of(loadProductByIdFailure({ error: error.message ?? 'Error desconocido' }))
          )
        )
      )
    )
);