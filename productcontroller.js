const schema = require("./productschema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("Upload");

const addProduct = function (req, res) {
  let newuser = new schema({
    ProductName: req.body.ProductName,
    Price: req.body.Price,
    Image: req.file,
    ProductSize: req.body.ProductSize,
    Category: req.body.Category,
  });
  newuser
    .save()
    .then((data) => {
      console.log("Data save sucessfully");
      console.log(data);
      res.status(200).json({
        status: 200,
        productdetails: data,
      });
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
      res.status(500).json({
        status: 500,
        Details: err,
      });
    });
};

const editProduct = function (req, res) {
    console.log(req.params.id);
    console.log("pn",req.body.ProductName);

  schema
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        ProductName:req.body.ProductName,
        Price:req.body.Price,
        Image:req.file,
        ProductSize:req.body.ProductSize,
        Category:req.body.Category,
      }
    )
    .exec()
    .then((data) => {
      console.log("Edit the product");
      console.log(data);
      res.status(200).json({
        status: 200,
        Data: data,
      });
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
      res.status(500).json({
        status: 500,
        "Error is": err,
      });
    });
};

const removeProduct = function (req, res) {
  console.log(req.params);
  schema
    .findByIdAndDelete({ _id:req.params.id })
    .exec()
    .then((data) => {
      console.log("Product Removed Sucessfully");
      console.log(data);
      res.status(200).json({
        status: 200,
        Data: data,
      });
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
      res.status(500).json({
        status: 500,
        "Error is": err,
      });
    });
};

const viewProductById = function (req, res) {
  console.log(req.params);
  schema
    .findById({ _id:req.params.id })
    .exec()
    .then((data) => {
      console.log("Product obtained Sucessfully");
      console.log(data);
      res.status(200).json({
        status: 200,
        Data: data,
      });
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
      res.status(500).json({
        status: 500,
        "Error is": err,
      });
    });
};

const serch=function(req,res){
  schema.find()
}

module.exports = { addProduct, upload, editProduct, removeProduct,viewProductById };
