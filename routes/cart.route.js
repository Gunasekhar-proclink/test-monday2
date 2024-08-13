// routes/cart.route.js
import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  createNewCartCtr,
  getCartCtr,
  deleteCartCtr,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.route("/").post(auth , createNewCartCtr); 

router.route("/:id").get(auth , getCartCtr).delete(auth , deleteCartCtr); 

export default router;