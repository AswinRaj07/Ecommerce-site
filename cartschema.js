const mongoose = require("mongoose");

let cartschema = mongoose.Schema({
  customerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AddProduct",
  },
  date: Date,
});
const Addcart = mongoose.model("cardproduct", cartschema);
module.exports = Addcart;
