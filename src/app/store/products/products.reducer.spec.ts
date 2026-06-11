import { productsReducer, initialState } from './products.reducer';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  loadProductById,
  loadProductByIdSuccess,
  loadProductByIdFailure,
  setSortConfig
} from './products.actions';
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
  images: [],
  thumbnail: ''
};

describe('ProductsReducer', () => {
  it('debe retornar el estado inicial', () => {
    const state = productsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('debe activar loading al cargar productos', () => {
    const action = loadProducts();
    const state = productsReducer(initialState, action);
    expect(state.loading).toBeTrue();
    expect(state.error).toBeNull();
  });

  it('debe cargar productos exitosamente', () => {
    const action = loadProductsSuccess({ products: [mockProduct] });
    const state = productsReducer(initialState, action);
    expect(state.products.length).toBe(1);
    expect(state.loading).toBeFalse();
  });

  it('debe manejar error al cargar productos', () => {
    const action = loadProductsFailure({ error: 'Error de red' });
    const state = productsReducer(initialState, action);
    expect(state.error).toBe('Error de red');
    expect(state.loading).toBeFalse();
  });

  it('debe activar loading al cargar producto por id', () => {
    const action = loadProductById({ id: 1 });
    const state = productsReducer(initialState, action);
    expect(state.loading).toBeTrue();
    expect(state.selectedProduct).toBeNull();
  });

  it('debe cargar producto por id exitosamente', () => {
    const action = loadProductByIdSuccess({ product: mockProduct });
    const state = productsReducer(initialState, action);
    expect(state.selectedProduct).toEqual(mockProduct);
    expect(state.loading).toBeFalse();
  });

  it('debe manejar error al cargar producto por id', () => {
    const action = loadProductByIdFailure({ error: 'No encontrado' });
    const state = productsReducer(initialState, action);
    expect(state.error).toBe('No encontrado');
    expect(state.loading).toBeFalse();
  });

  it('debe establecer configuración de ordenamiento', () => {
    const action = setSortConfig({ config: { field: 'price', order: 'asc' } });
    const state = productsReducer(initialState, action);
    expect(state.sortConfig).toEqual({ field: 'price', order: 'asc' });
  });

  it('debe limpiar configuración de ordenamiento', () => {
    const action = setSortConfig({ config: null });
    const state = productsReducer(initialState, action);
    expect(state.sortConfig).toBeNull();
  });
});