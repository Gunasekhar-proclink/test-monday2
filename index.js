import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.route.js";
import cartRouter from "./routes/cart.route.js";
import usersRouter from "./routes/users.route.js";


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/user", usersRouter);



// app.use("/cart", cartRouter);
// app.use("/orders" , ordersRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
