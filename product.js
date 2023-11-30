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
      throw new Error(`Ya existe un producto con el codigo ${code}.`);
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
    
    return new Date().getTime().toString();
  }
}
const productManager = new ProductManager();
console.log('Productos despues de crear la instancia:', productManager.getProducts());

const productId = productManager.addProduct({
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25,
});
console.log('Producto agregado exitosamente con ID:', productId);


console.log('Productos despues de agregar un producto:', productManager.getProducts());


const duplicatedProductId = productManager.addProduct({
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25,
});
console.log('Producto agregado exitosamente con ID:', duplicatedProductId);


////Evaluacioooooonn
const firstProductId = productManager.getProducts()[0].id; 
const productById = productManager.getProductById(firstProductId);
console.log('Producto encontrado por ID:', productById);

const nonExistentProductId = 'nonexisteXD';
const nonExistentProductById = productManager.getProductById(nonExistentProductId);
console.log('Producto encontrado por ID:', nonExistentProductById);
