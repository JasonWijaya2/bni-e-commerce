const router = require("..");
const dataCart = require("../../../db/cart.json");
const dataProduct = require("../../../db/product.json");
const fs = require("fs");

const getProduct = async (req, res) => {
  console.log("halooo");
  res.status(200).json(dataCart);
};

const addToCart = async (req, res) => {
  let { id } = req.params;

  let pushProduct = dataProduct.find((product) => {
    return product.id == id;
  });
  // console.log(pushProduct.id);
  dataCart.push(pushProduct);
  console.log(dataCart);

  // Write the updated user array back to user.json
  fs.writeFileSync("./db/cart.json", JSON.stringify(dataCart, null, 2));
};

module.exports = { addToCart, getProduct };
