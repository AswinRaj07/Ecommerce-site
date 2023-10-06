const orderschema = require("./orderschema");
const order = function (req, res) {
  let date = new Date();
  let neworder = new orderschema({
    productid: req.params.productid,
    customerid: req.body.customerid,
    date: date,
    deliverydate: req.body.deliverydate,
    count: req.body.count,
    Totalprice: req.body.Totalprice,
    Paymenttype: req.body.Paymenttype,
  });
  neworder
    .save()
    .then((data) => {
      console.log("Order Sucessfully");
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
module.exports = { order };
