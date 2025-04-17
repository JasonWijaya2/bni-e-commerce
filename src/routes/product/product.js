const dataProduct = require("../../../db/product.json");

// routing get all data products
const getAllProduct = async (req,res)=>{
    console.log(dataProduct);
    res.status(200).json(dataProduct);
}

//routing get data by id
const getProductDetail = async  (req,res)=>{
  let id = req.params.id;
  let idNumber = id;

  let result = dataProduct.find(el => {
    console.log(el.id);
      return el.id === idNumber
  })

  res.status(200).json({result})
}

//routing get data by nama
const searchProduct = async (req,res)=>{
try{
  let namaProduk = req.params.nama;
  namaProduk = namaProduk;

  let result = dataProduct.find(el => {
      return el.productName.toLowerCase().includes(namaProduk.toLowerCase());
  })

  res.status(200).json({result})
}
catch(error){
    return error;
    }
}

module.exports = {
    searchProduct,
    getAllProduct,
    getProductDetail
}