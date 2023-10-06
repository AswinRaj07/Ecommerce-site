const mongoose = require("mongoose");

let addproductschema = mongoose.Schema({
  ProductName: String,
  Price: String,
  Image: Object,
  ProductSize: String,
  Category: String,
});
const AddProduct = mongoose.model("AddProduct", addproductschema);
module.exports = AddProduct;
