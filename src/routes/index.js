const express = require("express");
const user = require("./user/user.js");
const cart = require('./cart/cart.js');
const router = express.Router();

router.post("/bni-e-commerce/register", user.registerUser);
router.post("/bni-e-commerce/login", user.loginUser);
router.post('/bni-e-commerce/cart/add/:id', cart.addToCart);
router.get('/bni-e-commerce/cart/', cart.getProduct);

module.exports = router;
