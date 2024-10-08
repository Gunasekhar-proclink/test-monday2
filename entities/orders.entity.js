import { Entity } from "electrodb";
import { client } from "../util/dbconnection.js";

const Order = new Entity(
  {
    model: {
      entity: "Order",
      version: "2",
      service: "OrderService",
    },
    attributes: {
      orderId: {
        type: "string",
      },
      userId: {
        type: "string",
      },
      products: {
        type: "list",
        items: {
          type: "map",
          properties: {
            productId: {
              type: "string",
            },
            quantity: {
              type: "number",
            },
          },
        },
      },
      totalPrice: {
        type: "number",
      },
      orderDate: {
        type: "string",
      },
      status: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["orderId"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "orders" }
);

export { Order };