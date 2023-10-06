const schema=require('./productschema')

const footwear=function(req,res){
    schema.findOne({"Category":"FootWear"}).exec()
    .then(data=>{
        console.log("FootWear viewed sucessfully")
        console.log(data)
        res.status(200).json({
            status:200,
            "FootWear":data
        })
    })
    .catch(err=>{
        console.log("FootWear can't view")
        console.log(err)
        res.status(500).json({
            status:500,
            "Data":err
        })
    })
}
module.exports={footwear}