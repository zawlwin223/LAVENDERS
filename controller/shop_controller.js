let product = require ("../model/productSchema.js");

let render_shop_page = async (req,res,next)=>{
    let all_product = await product.find().sort({created: 'descending'});
    console.log(all_product)
    res.render("../views/shop.ejs",{all_product:all_product})
}

let render_product_detail_page = async (req,res,next)=>{
    let get_product = await product.findById(req.params.id)
    res.render("../views/product_detail.ejs",{product:get_product})
}

let add_product = async (req,res,next)=>{
    req.body["image"]=req.files.image.name;
    try{
        let add_product =await new product(req.body).save();
        res.send(add_product)
    }catch(e){
        next(new Error(e))
    }
    
  
}


module.exports={render_shop_page,render_product_detail_page,add_product}