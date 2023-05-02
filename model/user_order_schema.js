let mongoose = require ("mongoose")
let {Schema}=mongoose;

let order_schema = new Schema({
   product:[{id:{type:Schema.Types.ObjectId,required:true},qty:{type:String,required:true},price:{type:Number},img:{type:String,required:true},title:{type:String,required:true}}] ,
   email:{type:String,required:true},
   firstName:{type:String,required:true},
   lastName:{type:String,required:true},
   address:{type:String,required:true},
   city:{type:String,required:true},
   phone:{type:String,required:true},
   zip:{type:String,required:true},
   country:{type:String,required:true},
   created:{type:Date,default:Date.now},
})

module.exports = mongoose.model("Order",order_schema)