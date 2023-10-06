const schema = require("./registrationschema");
const logIn = function (req, res) {
  schema
    .findOne({ EmailId: req.body.EmailId })
    .exec()
    .then((data) => {
      if (data == null) {
        console.log("Invalid EmailId");
        schema
          .findOne({ MobileNumber: req.body.MobileNumber })
          .exec()
          .then((data) => {
            if (data == null) {
              console.log("Invalid MobileNumber");
              res.status(500).json({
                status: 500,
                msg: "No data found",
              });
            } else {
              if (data.Password == req.body.Password) {
                console.log("LogIn sucess");
                res.status(200).json({
                  status: 200,
                  Data: data,
                });
              } else {
                console.log("Invalid Password");
                
              }
            }
          })
          .catch((err) => {
            res.status(500).json({
              status: 500,
            });
            console.log("no mob");
          });
      } else {
        if (data.Password === req.body.Password) {
          console.log("LogIn sucess");
          res.status(200).json({
            status: 200,
            Data: data,
          });
        } else {
          console.log("Invalid Password");
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: 500,
        "Error is": err,
      });
    });
};
module.exports = { logIn };
