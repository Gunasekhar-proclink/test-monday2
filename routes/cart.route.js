// routes/cart.route.js
import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  createNewCartCtr,
  getCartCtr,
  deleteCartCtr,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.route("/").post(createNewCartCtr); 

router.route("/:id").get(getCartCtr).delete(deleteCartCtr); 

export default router;