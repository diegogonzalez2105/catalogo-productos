import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { productsReducer } from './store/products/products.reducer';
import { cartReducer } from './store/cart/cart.reducer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        provideStore({
          products: productsReducer,
          cart: cartReducer
        })
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});