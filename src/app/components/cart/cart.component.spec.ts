import { TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { provideStore } from '@ngrx/store';
import { productsReducer } from '../../store/products/products.reducer';
import { cartReducer } from '../../store/cart/cart.reducer';

describe('CartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [
        provideStore({
          products: productsReducer,
          cart: cartReducer
        })
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});