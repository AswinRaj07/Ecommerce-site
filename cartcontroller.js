const cartschema = require("./cartschema");

const viewcart = async (req, res) => {
  let date = new Date();
  let flag = 0;
  await cartschema
    .find({
      customerid: req.params.customerid,
      productid: req.params.productid,
    })
    .exec()
    .then((datas) => {
      if (datas.length > 0) {
        flag = 1;
      }
    })
    .catch((err) => {
      console.log("Error");
      res.status(500).json({
        status: 500,
        Details: err,
      });
    });
  if (flag == 0) {
    let newcart = new cartschema({
      customerid: req.params.customerid,
      productid: req.params.productid,
      date: date,
    });
    await newcart
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
  } else {
    res.status(500).json({
      status: 500,
      Details: "The product already is in your Cart !!!!",
    });
  }
};

const viewallcart = function (req, res) {
  cartschema
    .find({ customerid: req.params.customerid })
    .populate("productid")
    .exec()
    .then((data) => {
      console.log("Product Viewed Sucessfully");
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

const removecartProduct = function (req, res) {
  console.log(req.params);
  cartschema
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
module.exports = { viewcart, viewallcart,removecartProduct };
