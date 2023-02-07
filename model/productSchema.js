let mongoose = require ("mongoose");
let {Schema} = mongoose;

let product_Schema = new Schema({
   image:{type:String,required:true},
   title:{type:String,required:true},
   price:{type:String,required:true},
   created:{type:Date,default:Date.now}
})

module.exports = mongoose.model("Product",product_Schema)