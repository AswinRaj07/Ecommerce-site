const express = require("express");
const router = express.Router();
const { Schema } = require("mongoose");
const register = require("./registrationcontroller");
const login = require("./logincontroller");
const Product = require("./productcontroller");
const admincontroller = require("./admincontroller");
const deliveryaddress = require("./deliveryaddresscontroller");
const boyscategorycontroller = require("./boyscategorycontroller");
const girlsfashioncontroller = require("./girlsfaschioncontroller");
const FootWear = require("./footwearcontroller");
const cart = require("./cartcontroller");
const ordercontroller=require("./ordercontroller")
router.post("/Registerhere", register.addUser);
router.post("/logIn", login.logIn);
router.post("/AddProduct", Product.upload, Product.addProduct);
router.post("/deleteproduct/:id", Product.removeProduct);
router.post("/editproduct/:id", Product.editProduct);
router.post("/viewProductById/:id", Product.viewProductById);
router.post("/viewAllProducts", admincontroller.viewAllProduct);
router.post("/adminLogin", admincontroller.adminLogin);
router.post("/Adddeliveryaddress", deliveryaddress.Adddeliveryaddress);
router.post("/BoysFashion", boyscategorycontroller.boysfashion);
router.post("/GirlsFashion", girlsfashioncontroller.girlsfashion);
router.post("/Toys", boyscategorycontroller.toys);
router.post("/footwear", FootWear.footwear);
router.post("/cart/:customerid/:productid", cart.viewcart);
router.post("/viewallcart/:customerid", cart.viewallcart);
router.post("/removecartproduct/:id", cart.removecartProduct);
router.post("/orderproducts/:productid",ordercontroller.order)
module.exports = router;
