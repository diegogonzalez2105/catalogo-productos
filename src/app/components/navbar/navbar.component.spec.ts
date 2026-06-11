import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { productsReducer } from '../../store/products/products.reducer';
import { cartReducer } from '../../store/cart/cart.reducer';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        provideRouter([]),
        provideStore({
          products: productsReducer,
          cart: cartReducer
        })
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});