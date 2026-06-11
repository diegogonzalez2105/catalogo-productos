import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { provideHttpClient } from '@angular/common/http';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(ProductService);
    expect(service).toBeTruthy();
  });
});