import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  loadProductById,
  loadProductByIdSuccess,
  loadProductByIdFailure
} from './products.actions';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts(30).pipe(
          map(response => loadProductsSuccess({ products: response.products })),
          catchError((error: Error) =>
            of(loadProductsFailure({ error: error.message ?? 'Error desconocido' }))
          )
        )
      )
    )
  );

  loadProductById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductById),
      mergeMap(({ id }) =>
        this.productService.getProductById(id).pipe(
          map((product: Product) => loadProductByIdSuccess({ product })),
          catchError((error: Error) =>
            of(loadProductByIdFailure({ error: error.message ?? 'Error desconocido' }))
          )
        )
      )
    )
  );
}