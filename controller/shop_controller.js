let product = require ("../model/productSchema.js");
let brand = [];
let category = [];
let render_shop_page = async (req,res,next)=>{
    let all_product = await product.find().sort({created: 'descending'});
    all_product.forEach((val)=>{
        brand.push(val.brand)
        category.push(val.category)
    })
    let unique_brand = [...new Set(brand)];
    let unique_category = [...new Set(category)]  
    res.render("../views/shop.ejs",{all_product:all_product,brand:unique_brand,category:unique_category})
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

let price_high_to_low = async (req,res,next)=>{
    let all_product = await product.find().sort({created: 'descending'});
    let product_sort =await product.aggregate([{
        $sort : {
            price : -1
        }
    }], {
        collation: {
            locale: "en_US",
            numericOrdering: true
        }
    });
    all_product.forEach((val)=>{
        brand.push(val.brand)
        category.push(val.category)
    })
    let unique_brand = [...new Set(brand)];
    let unique_category = [...new Set(category)]  
    res.render("../views/shop.ejs",{all_product:product_sort,brand:unique_brand,category:unique_category})
}

let price_low_to_high = async (req,res,next)=>{
    let all_product = await product.find().sort({created: 'descending'});
    let product_sort =await product.aggregate([{
        $sort : {
            price : 1
        }
    }], {
        collation: {
            locale: "en_US",
            numericOrdering: true
        }
    });
    all_product.forEach((val)=>{
        brand.push(val.brand)
        category.push(val.category)
    })
    let unique_brand = [...new Set(brand)];
    let unique_category = [...new Set(category)]  
    res.render("../views/shop.ejs",{all_product:product_sort,brand:unique_brand,category:unique_category})
}

let by_category = async (req,res,next)=>{
    let all_product = await product.find().sort({created: 'descending'});
    let product_by_category = await product.find({category:req.params.category});
    all_product.forEach((val)=>{
        brand.push(val.brand)
        category.push(val.category)
    })
    let unique_brand = [...new Set(brand)];
    let unique_category = [...new Set(category)] 
    res.render("../views/shop.ejs",{all_product:product_by_category,brand:unique_brand,category:unique_category})
}

let by_brand= async (req,res,next)=>{
    console.log(req.params.brand)
    let all_product = await product.find().sort({created: 'descending'});
    let product_by_brand = await product.find({brand:req.params.brand});
    all_product.forEach((val)=>{
        brand.push(val.brand)
        category.push(val.category)
    })
    let unique_brand = [...new Set(brand)];
    let unique_category = [...new Set(category)] 
    res.render("../views/shop.ejs",{all_product:product_by_brand,brand:unique_brand,category:unique_category})
}
module.exports={render_shop_page,render_product_detail_page,add_product,price_high_to_low,price_low_to_high,by_category,by_brand}