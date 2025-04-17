const express = require("express");
const user = require("./user/user.js");
const product = require("./product/product.js")

const router = express.Router();

router.post("/bni-e-commerce/register", user.registerUser);
router.post("/bni-e-commerce/login", user.loginUser);

router.get("/bni-e-commerce/products", product.getAllProduct);
router.get("/bni-e-commerce/product/:id", product.getProductDetail);

module.exports = router;
