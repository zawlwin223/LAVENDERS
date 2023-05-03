let db = require ("../model/user_order_schema.js")

let render_check_out_page = async (req,res,next)=>{
    res.render("../views/checkout.ejs")
}

let render_order_page_post = async (req,res,next)=>{
 let result = await new db(req.body).save();
 console.log(result)
 res.send(result)

  
}
let render_order_page = async (req,res,next)=>{
       let result = await db.find({}).sort({created: -1}).limit(1)
       console.log(result)
        res.render("../views/order.ejs",{order:result})
    }
module.exports={render_check_out_page ,render_order_page_post, render_order_page}