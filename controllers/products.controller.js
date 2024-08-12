import { v4 } from "uuid";

import {
    getAllProducts,
    getProductsById,
    UpdateProductById,
    deleteProductById,
    createProduct,
} from "../services/products.service.js";

async function getAllProductsCtr(request, response) {
  try {
    const allProducts = await getAllProducts();
    response.status(200).send(allProducts.data);
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: " Couldn't get what you wanted " });
  }
}

async function getProductIdCtr(request, response) {
  const { id } = request.params;
  // console.log(movie.data);
  try {
    const Product = await getProductsById(id);
    console.log(Product);
    Product.data
      ? response.send(Product.data)
      : response.status(404).send({ msg: "Movie not found" });
  } catch (err) {
    response.status(500).send({ msg: "failed to retrieve" });
  }
}

async function deleteProductCtr(request, response) {
  const { id } = request.params;

  try {
    const Product = await getProductsById(id);
    if (Product.data) {
      // const mid = movies.indexOf(movie);
      // movies.splice(mid, 1);
      await deleteProductById(id);
      response.send({ msg: "Movie deleted 🎉" });
    } else {
      response.status(404).send({ msg: "there is No such Movie 🥲" });
    }
  } catch (err) {
    response.status(500).send({ msg: "Failed to Perform delete" });
  }
}

async function createProductCtr(req, res) {
  const data = req.body;
  const addProduct = {
    ...data,
    productId: v4(),
  };
  try {
    await createProduct(addProduct);
    res.status(201).send(addProduct);
  } catch (err) {
    console.log(err);
    res.send({ msg: "unable to create" });
  }
}

async function updateProductCtr(request, response) {
  const { id } = request.params;
  const updateProduct = request.body;
  try {
    const Product = await getMoviesById(id);
    if (Product.data) {
      const mergedData = await UpdateProductById(Product, updateProduct);
      console.log("updated..");
      response.send(mergedData.data);
    } else {
      response.status(404).send("No such Movie 🥲");
    }
  } catch (err) {
    response.status(500).send({ msg: "Movie not found" });
  }
}

export {
  getAllProductsCtr,
  deleteProductCtr,
  createProductCtr,
  updateProductCtr,
  getProductIdCtr,
};