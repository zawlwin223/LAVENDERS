
let add_to_cart = document.querySelector(".add_to_cart");

let body = document.querySelector(".cart_body")
// let cart_link = document.querySelector(".cart_link")
// var data_from_LS = JSON.parse(localStorage.getItem("Cart_Item"));
var items = {};
let product_img = document.querySelector(".product-image");
let product_title = document.querySelector(".product-title").innerHTML;
let product_price = document.querySelector(".product-price").innerHTML;
let product_quantity = document.querySelector(".product-quantity").innerHTML;



data_from_LS.forEach((val)=>{
    
    if(val.id==product_img.getAttribute("product_id")){
        add_to_cart.innerHTML="Already In Cart"
        add_to_cart.setAttribute('disabled', '');
       
    }
   
})
function add_cart(){
    console.log("Hi it works")
    setItem();
    
    cart_icon();
    to_cart_body(data_from_LS);
    total_price()
    add_to_cart.innerHTML="Already In Cart"
    add_to_cart.setAttribute('disabled', '');
    
}



function setItem(){

    items.id = product_img.getAttribute("product_id")
    items.Img = product_img.src;
    items.title = product_title;
    items.price = product_price;
    items.quantity = product_quantity;
    items.total_price =Number( product_price.slice(1));

    if(data_from_LS == null){
       data_from_LS= []
        
    }

        data_from_LS.push(items);
        save_to_ls(data_from_LS)
            
}

// function save_ls(data){
//     localStorage.setItem("Cart_Item",JSON.stringify(data));
// }
//insert data to cart_body

// function to_cart_body(data){
   
//  let div = "";
//   data.forEach((val,ind)=>{


     
//      div+=
//     `
//     <div class="d-flex flex-row  justify-content-between cart_item py-3 border-bottom" id='${val.id}'>
//     <div class = "w-50">
//     <img src="${val.Img}" alt="" class="ms-3 cart_img" style="height: 80px;">
//     </div>
    

//     <div class="me-3 d-flex flex-column w-50">
//         <span class="text-uppercase">${val.title}</span>
//         <span class="fw-bold mt-2 mb-2 price">$${val.total_price}</span>
//         <div class="d-flex justify-content-around " style="border: 1px solid black;width: 80px;">
//     <i class="bi bi-plus-lg" onclick="plus(event,'${val.price}')"></i>
//     <span class="quantity_text">${val.quantity}</span>
//     <i class="bi bi-dash" onclick="minus(event,'${val.price}')"></i>
//   </div>  
//     </div>
//     <i class="bi bi-x-circle icon_x " onclick="remove_item(event,${ind})"></i>
// </div>
  
//     `
//   }); 
//  body.innerHTML=div;
//   total_price()
// }





// function total_price(){
//     let cart_total_price = 0;
//     let price = document.querySelectorAll(".price");
//    price.forEach(val=>{
//     let item_price =Number(val.innerHTML.slice(1));
//     cart_total_price+=item_price
    
//    })
//    cart_footer.innerHTML = 
//    `
//    <div class="d-flex flex-column">
//    <span class="text-uppercase fw-bold">Total</span>
//    <span class="fw-bold total_price">${cart_total_price}K</span>
// </div>
// <div>
//    <button class="btn btn-dark w-100 h-25 mb-0">Check Out</button>
// </div>
   
//    `
// }

// total_price();



// function  plus(e,p){
//     let cart_item =e.target.closest(".cart_item");
//     let quantity_text = e.target.closest(".cart_item").querySelector(".quantity_text");
//     let item_price = e.target.closest(".cart_item").querySelector(".price");
//     let price=Number(item_price.innerHTML.slice(1));
//     let item_id = cart_item.getAttribute("id");
//     let user_click_item = data_from_LS.find((item)=>item.id==item_id);
    
//      price +=Number(p.slice(1));
//      user_click_item.quantity++;
//     user_click_item.total_price+=Number(user_click_item.price.slice(1));
//      item_price.innerHTML = `$${user_click_item.total_price}`;
//     quantity_text.innerHTML = Number(quantity_text.innerHTML)+1 ;

//     total_plus(p);
//     save_to_ls(data_from_LS)
// }

// function total_plus(p){
//     let total_price = document.querySelector(".total_price");
//     let item_price = Number(p.slice(1));
//     let total = Number(total_price.innerHTML.substring(0,total_price.innerHTML.length-1))+item_price;
//     total_price.innerHTML = `${total}K`
//     console.log(total)
// }
// total_plus();





// function minus(e,p){
//     let quantity_text = e.target.closest(".cart_item").querySelector(".quantity_text");
//     let cart_item =e.target.closest(".cart_item");
//     let item_id = cart_item.getAttribute("id");
//     if(quantity_text.innerHTML == "1"){
//         console.log("equal zero")
//         return;
//     }
//     quantity_text.innerHTML = Number(quantity_text.innerHTML)-1 ;
//     let item_price = e.target.closest(".cart_item").querySelector(".price");
//     let price=Number(item_price.innerHTML.slice(1));
//     let user_click_item = data_from_LS.find((item)=>item.id==item_id);
   
//     //  price -=Number(p.slice(1));;
     
//      user_click_item.quantity--;
//      user_click_item.total_price-=Number(user_click_item.price.slice(1));
//      item_price.innerHTML = `$${user_click_item.total_price}`;
//     //  user_click_item.price=`$${price}`;
//     total_minus(p);
//     save_to_ls(data_from_LS)
// }

// function total_minus(p){
//     let total_price = document.querySelector(".total_price");
//     let item_price = Number(p.slice(1));
//     let total = Number(total_price.innerHTML.substring(0,total_price.innerHTML.length-1))-item_price;
//     total_price.innerHTML = `${total}K`
//     console.log(total)
// }
// total_minus()




// function remove_item(e,ind){
  
//     data_from_LS.splice(ind,1)
//     console.log(ind)
//     console.log(data_from_LS)
   
    
//     save_to_ls(data_from_LS)
  

    
//    let price = e.target.closest(".cart_item").querySelector(".price");
//    let img = e.target.closest(".cart_item").querySelector("img").src
//    let total_price = document.querySelector(".total_price");
//    let new_price =  Number(total_price.innerHTML.substring(0,total_price.innerHTML.length-1))-Number(price.innerHTML.slice(1));
//    total_price.innerHTML = `${new_price}K`
//    e.target.closest(".cart_item").remove();
//    cart_icon();
//    console.log(img,product_img.src)
//    if(img == product_img.src){
//     add_to_cart.innerHTML="Add To Cart"
//         add_to_cart.removeAttribute('disabled', '');
//    }

   
// }

// function cart_icon(){
//     let data = JSON.parse(localStorage.getItem("Cart_Item")) ;
//     cart_link.innerHTML += 
// `<span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger" style="top: 10px !important;z-index: 1;" >
// ${data.length}
// </span>`
// }
// cart_icon();




