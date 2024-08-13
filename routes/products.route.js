import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Products } from "../entities/products.entity.js";
import { auth } from "../middlewares/auth.middleware.js";
import {
  getAllProductsCtr,
  deleteProductCtr,
  createProductCtr,
  updateProductCtr,
  getProductIdCtr,
} from "../controllers/products.controller.js";

const router = express.Router();


router.get("/",  getAllProductsCtr);

router.get("/:id", getProductIdCtr);

router.delete("/:id", deleteProductCtr);

router.post("/", createProductCtr);

router.put("/:id", updateProductCtr);

export default router;