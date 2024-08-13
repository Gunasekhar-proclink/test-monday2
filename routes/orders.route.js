import express from "express";
import {
  placeOrderCtr,
  getUserOrdersCtr,
} from "../controllers/orders.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();


router.post("/", auth , placeOrderCtr);

router.get("/:id", auth , getUserOrdersCtr);

export default router;