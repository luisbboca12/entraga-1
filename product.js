class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    const id = this.generateId();
    const product = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    const isCodeRepeated = this.products.some((p) => p.code === code);
    if (isCodeRepeated) {
      throw new Error(`Ya existe un producto con el código ${code}.`);
    }

    this.products.push(product);
    return id;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error(`Producto con ID ${id} no encontrado.`);
    }
    return product;
  }

  generateId() {
    // Se podría implementar lógica más robusta para la generación de IDs
    // pero para este ejemplo, simplemente usaremos un timestamp
    return new Date().getTime().toString();
  }
}

// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Llamar a getProducts después de crear la instancia
console.log('Productos después de crear la instancia:', productManager.getProducts());

// Añadir un producto
const productId = productManager.addProduct({
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25,
});
console.log('Producto agregado exitosamente con ID:', productId);

// Llamar a getProducts después de agregar un producto
console.log('Productos después de agregar un producto:', productManager.getProducts());

// Intentar añadir un producto con el mismo código
const duplicatedProductId = productManager.addProduct({
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123', // Este código ya está en uso
  stock: 25,
});
console.log('Producto agregado exitosamente con ID:', duplicatedProductId);

// Evaluar getProductById para un producto existente
const firstProductId = productManager.getProducts()[0].id; // Tomamos el ID del primer producto
const productById = productManager.getProductById(firstProductId);
console.log('Producto encontrado por ID:', productById);

// Evaluar getProductById para un producto inexistente
const nonExistentProductId = 'nonexistentid';
const nonExistentProductById = productManager.getProductById(nonExistentProductId);
console.log('Producto encontrado por ID:', nonExistentProductById);
