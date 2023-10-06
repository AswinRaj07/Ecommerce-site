const schema=require('./productschema')

const boysfashion=function(req,res){
    schema.find({Category:'BoysFashion'}).exec()
    .then(data=>{
        console.log("BoysFashion viewed sucessfully")
        console.log(data)
        res.status(200).json({
            status:200,
            "BoysFashion":data
        })
    })
    .catch(err=>{
        console.log("BoysFashion can't view")
        console.log(err)
        res.status(500).json({
            status:500,
            "Data":err
        })
    })
}

const toys=function(req,res){
    schema.find({Category:'Toys'}).exec()
    .then(data=>{
        console.log("Toys viewed sucessfully")
        console.log(data)
        res.status(200).json({
            status:200,
            "Toys":data
        })
    })
    .catch(err=>{
        console.log("Toys can't view")
        console.log(err)
        res.status(500).json({
            status:500,
            "Data":err
        })
    })
}
module.exports={boysfashion,toys}