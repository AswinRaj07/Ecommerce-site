const schema = require("./deliveryaddressschema");

const Adddeliveryaddress = function (req, res) {
  let newdeliveryaddress = new schema({
    FullName: req.body.FullName,
    HouseNumber: req.body.HouseNumber,
    StreetAddress: req.body.StreetAddress,
    Landmark: req.body.Landmark,
    Pincode: req.body.Pincode,
    City: req.body.City,
    State: req.body.State,
    MobileNumber: req.body.MobileNumber,
  });
  newdeliveryaddress
    .save()
    .then((data) => {
      console.log("Address add sucessfully");
      console.log(data);
      res.status(200).json({
        status: 200,
        Address: data,
      });
    })
    .catch((err) => {
      console.log("Address not registred");
      console.log(err);
      res.status(500).json({
        status: 500,
        "Error is": err,
      });
    });
};
module.exports = { Adddeliveryaddress };
