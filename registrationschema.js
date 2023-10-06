const mongoose=require('mongoose')

let registrationschema=mongoose.Schema({
    FullName:String,
    MobileNumber:Number,
    EmailId:String,
    Password:String
})
const users=mongoose.model("Users",registrationschema)
module.exports=users