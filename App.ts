import express from 'express';
import cors from 'cors';

import db from './database';
import controllers from './controllers';

const app = express();

app.use(cors());
app.use(express.json()); // Middleware que transforma la req.body a un json

// GET
app.get("/products", controllers.getProducts);
app.get("/products-cart", controllers.getProductsCart);

// POST
app.post("/products-cart", controllers.addProductCart);

// PUT
app.put("/products-cart/:productId", controllers.putProduct);

// DELETE
app.delete("/products-cart/:productId", controllers.deleteProduct);

app.listen(4000, () => {
  console.log("Server funcionando en el puerto 4000");
  db();
});

export default app;
