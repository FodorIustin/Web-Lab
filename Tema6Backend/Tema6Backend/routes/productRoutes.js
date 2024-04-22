import { Router } from "express";

const router = Router();

const products = [
  {
    id: 1,
    name: "Montes Scelerisque",
    stars: "4.9",
    reviews: "807",
    sale: "65",
    price: "332",
  },
];

router.get("/", function (req, res) {
  res.send(JSON.stringify(products));
});

router.delete("/", (req, res) => {
  const { productId } = req.body;

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );
  products.splice(productIndex, 1);
  res.send("Deleted product from database");
});

router.post("/", function (req, res) {
  products.push(req.body);
  res.send("Added product to the database");
});

export default router;
