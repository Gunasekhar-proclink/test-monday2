import { Products } from "../entities/products.entity.js";

async function UpdateProductById(Product, updateProduct) {
  return await Products.put({
    ...Product.data,
    ...updateProduct,
  }).go();
}

async function deleteProductById(id) {
  await Movies.delete({ productId: id }).go();
}

async function getProductsById(id) {
  return await Products.get({ productId: id }).go();
}

async function getAllProducts() {
  return await Products.scan.go();
}

async function createProduct(addProduct) {
  await Products.create(addProduct).go();
}

export {
  getAllProducts,
  getProductsById,
  UpdateProductById,
  deleteProductById,
  createProduct,
};