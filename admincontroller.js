const productschema = require("./productschema");

const adminLogin = function (req, res) {
  let adminUsername = "arun123@gmail.com";
  let adminPassword = 12345;
  let username = req.body.EmailId;
  let password = req.body.Password;
  if (adminUsername == username) {
    if (adminPassword == password) {
      console.log("Admin login sucessfull");
      res.status(200).json({
        status: 200,
        msg: "Login Sucess",
      });
    } else {
      console.log("Admin Password is incorrect");
      res.status(200).json({
        status: 200,
        msg: "Password incorrect",
      });
    }
  } else {
    console.log("Incorrect admin username");
    res.status(500).json({
      status: 500,
      msg: "Username Not Fount",
    });
  }
};

const viewAllProduct = function (req, res) {
  productschema
    .find({})
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        AllProducts: data,
      });
    })
    .catch((err) => {
      console.log(err);
      req.status(500).json({
        status: 500,
        "Error is": err,
      });
    });
};
module.exports = { viewAllProduct, adminLogin };
