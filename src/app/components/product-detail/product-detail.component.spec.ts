import { TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { productsReducer } from '../../store/products/products.reducer';
import { cartReducer } from '../../store/cart/cart.reducer';
import { ProductsEffects } from '../../store/products/products.effects';

describe('ProductDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideStore({
          products: productsReducer,
          cart: cartReducer
        }),
        provideEffects([ProductsEffects])
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});