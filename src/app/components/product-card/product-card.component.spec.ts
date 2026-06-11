import { TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { productsReducer } from '../../store/products/products.reducer';
import { cartReducer } from '../../store/cart/cart.reducer';
import { Product } from '../../models/product.model';

const mockProduct: Product = {
  id: 1,
  title: 'Producto Test',
  description: 'Descripción test',
  category: 'test',
  price: 29.99,
  discountPercentage: 10,
  rating: 4.5,
  stock: 50,
  tags: [],
  sku: 'TST-001',
  weight: 1,
  dimensions: { width: 10, height: 10, depth: 10 },
  warrantyInformation: '1 año',
  shippingInformation: 'Envío rápido',
  availabilityStatus: 'In Stock',
  reviews: [],
  returnPolicy: '30 días',
  minimumOrderQuantity: 1,
  meta: { createdAt: '', updatedAt: '', barcode: '', qrCode: '' },
  images: ['https://via.placeholder.com/150'],
  thumbnail: 'https://via.placeholder.com/150'
};

describe('ProductCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
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
    const fixture = TestBed.createComponent(ProductCardComponent);
    fixture.componentInstance.product = mockProduct;
    expect(fixture.componentInstance).toBeTruthy();
  });
});