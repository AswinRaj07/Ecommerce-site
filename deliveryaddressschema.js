const mongoose = require("mongoose");
let deliveryaddressschema = mongoose.Schema({
  FullName: String,
  HouseNumber: String,
  StreetAddress: String,
  Landmark: String,
  Pincode: Number,
  City: String,
  State: String,
  MobileNumber: Number,
});
const deliveryaddress = mongoose.model(
  "DeliveryAddress",
  deliveryaddressschema
);
module.exports = deliveryaddress;
