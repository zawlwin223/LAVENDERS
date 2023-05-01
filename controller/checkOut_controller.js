let render_check_out_page = async (req,res,next)=>{
    res.render("../views/checkout.ejs")
}
let render_order_page = async (req,res,next)=>{
    res.render("../views/order.ejs")
}

module.exports={render_check_out_page, render_order_page }