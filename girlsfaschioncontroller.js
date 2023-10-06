const schema=require('./productschema')

const girlsfashion=function(req,res){
    schema.find({Category:"GirlsFashion"}).exec()
    .then(data=>{
        console.log("GirlsFashion viewed sucessfully")
        console.log(data)
        res.status(200).json({
            status:200,
            "GirlsFashion":data
        })
    })
    .catch(err=>{
        console.log("GirlsFashion can't view")
        console.log(err)
        res.status(500).json({
            status:500,
            "Data":err
        })
    })
}
module.exports={girlsfashion}