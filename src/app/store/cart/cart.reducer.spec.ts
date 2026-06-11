import { cartReducer, initialState, CartState } from './cart.reducer';
import { addToCart, removeFromCart, decreaseQuantity, clearCart } from './cart.actions';
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

describe('CartReducer', () => {
  it('debe retornar el estado inicial', () => {
    const state = cartReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('debe agregar un producto al carrito', () => {
    const action = addToCart({ product: mockProduct });
    const state = cartReducer(initialState, action);
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(1);
  });

  it('debe incrementar la cantidad si el producto ya existe', () => {
    const stateWithItem: CartState = {
      items: [{ product: mockProduct, quantity: 1 }]
    };
    const action = addToCart({ product: mockProduct });
    const state = cartReducer(stateWithItem, action);
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(2);
  });

  it('debe eliminar un producto del carrito', () => {
    const stateWithItem: CartState = {
      items: [{ product: mockProduct, quantity: 1 }]
    };
    const action = removeFromCart({ productId: 1 });
    const state = cartReducer(stateWithItem, action);
    expect(state.items.length).toBe(0);
  });

  it('debe decrementar la cantidad del producto', () => {
    const stateWithItem: CartState = {
      items: [{ product: mockProduct, quantity: 2 }]
    };
    const action = decreaseQuantity({ productId: 1 });
    const state = cartReducer(stateWithItem, action);
    expect(state.items[0].quantity).toBe(1);
  });

  it('debe eliminar el producto al decrementar desde cantidad 1', () => {
    const stateWithItem: CartState = {
      items: [{ product: mockProduct, quantity: 1 }]
    };
    const action = decreaseQuantity({ productId: 1 });
    const state = cartReducer(stateWithItem, action);
    expect(state.items.length).toBe(0);
  });

  it('debe vaciar el carrito', () => {
    const stateWithItem: CartState = {
      items: [{ product: mockProduct, quantity: 2 }]
    };
    const action = clearCart();
    const state = cartReducer(stateWithItem, action);
    expect(state.items.length).toBe(0);
  });
});