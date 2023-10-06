const schema = require("./registrationschema.js");
const addUser = function (req, res) {
  let newuser = new schema({
    FullName: req.body.FullName,
    MobileNumber: req.body.MobileNumber,
    EmailId: req.body.EmailId,
    Password: req.body.Password,
  });
  newuser
    .save()
    .then((data) => {
      console.log("Data save sucessfully");
      console.log(data);
      res.status(200).json({
        status: 200,
        userdetails: data,
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
module.exports = { addUser };
