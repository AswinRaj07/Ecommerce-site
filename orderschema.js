const mongoose=require('mongoose')

let orderschema=mongoose.Schema({
    productid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AddProduct",
    },
    customerid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    date:Date,
    deliverydate:Date,
    count:Number,
    Totalprice:Number,
    Paymenttype:String
})
const order=mongoose.model("Orders",orderschema)
module.exports=order