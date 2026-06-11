# Catálogo de Productos — Prueba Técnica Jaime Torres C y CIA S.A

Aplicación web en **Angular 17** que permite visualizar, explorar y gestionar un catálogo de productos consumiendo la API de [DummyJSON](https://dummyjson.com/products).

---

## 🚀 Tecnologías utilizadas

- **Angular 17** (Standalone Components)
- **NgRx 17** (Store, Effects, Selectors) — Manejo de estado global
- **TypeScript 5**
- **SCSS** para estilos
- **Jasmine / Karma** para pruebas unitarias

---

## ✅ Funcionalidades implementadas

### Visualización y Navegación
- Catálogo con grilla responsiva de productos
- Carrusel de imágenes por producto (navegación con botones y dots)
- Vista de detalle con descripción, dimensiones y reseñas
- Badge de descuento y alerta de stock bajo

### Interacción
- Ordenamiento por precio y calificación (ascendente/descendente)
- Carrito de compras completo:
  - Agregar productos
  - Incrementar / decrementar cantidad
  - Eliminar productos
  - Vaciar carrito
  - Visualizar total e ítems

### UI/UX
- Diseño limpio y moderno
- Responsive: móvil, tablet y escritorio
- Skeleton loading mientras cargan los productos
- Drawer animado del carrito
- Feedback visual en todas las acciones

### Bonus
- **26 pruebas unitarias** con Jasmine/Karma
- Lazy loading de rutas
- Manejo de errores con NgRx Effects

---

## 📁 Estructura del proyecto

src/app/
├── components/
│   ├── navbar/           # Barra de navegación con badge del carrito
│   ├── product-list/     # Catálogo principal con ordenamiento
│   ├── product-card/     # Tarjeta individual de producto
│   ├── product-detail/   # Vista detallada del producto
│   ├── cart/             # Drawer lateral del carrito
│   ├── carousel/         # Carrusel de imágenes
│   └── sort-controls/    # Controles de ordenamiento
├── models/
│   └── product.model.ts  # Interfaces TypeScript
├── services/
│   └── product.service.ts # Consumo de API REST
└── store/
├── products/          # Actions, Reducer, Selectors, Effects
└── cart/              # Actions, Reducer, Selectors

---

## 🛠️ Instalación y uso

### Prerrequisitos
- Node.js v18 o superior
- Angular CLI v17

```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli@17
```

### Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/catalogo-productos.git
cd catalogo-productos
```

### Instalar dependencias

```bash
npm install --legacy-peer-deps
```

### Ejecutar en desarrollo

```bash
ng serve
```

Abre el navegador en `http://localhost:4200`

### Ejecutar pruebas unitarias

```bash
ng test
```

### Build de producción

```bash
ng build
```

---

## 🌐 API

Endpoint base: `https://dummyjson.com/products`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/products?limit=30` | Listado de productos |
| GET | `/products/:id` | Detalle de un producto |

---

## 🧪 Pruebas unitarias — 26 SUCCESS

| Suite | Pruebas |
|-------|---------|
| CartReducer | 7 pruebas |
| ProductsReducer | 9 pruebas |
| ProductService | 1 prueba |
| AppComponent | 1 prueba |
| NavbarComponent | 1 prueba |
| CartComponent | 1 prueba |
| ProductListComponent | 1 prueba |
| ProductCardComponent | 1 prueba |
| ProductDetailComponent | 1 prueba |
| CarouselComponent | 1 prueba |
| SortControlsComponent | 1 prueba |
| CartService | 1 prueba |