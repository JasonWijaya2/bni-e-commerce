const express = require("express");
const user = require("./user/user.js");

const router = express.Router();

router.post("/bni-e-commerce/register", user.registerUser);
router.post("/bni-e-commerce/login", user.loginUser);

module.exports = router;
