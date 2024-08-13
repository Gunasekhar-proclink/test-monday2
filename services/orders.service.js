import { Order } from "../entities/orders.entity.js";

async function createOrder(orderData) {
  return await Order.create(orderData).go();
}

async function getOrdersByUserId(userID ) {

  return await Order.scan
  .where(
    ({ userId}, { eq }) => eq(userId, userID)
  ).go();
}

export { createOrder, getOrdersByUserId };