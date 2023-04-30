var data_from_LS = JSON.parse(localStorage.getItem("Cart_Item")) 

let del_box = document.querySelector(".del_box")
let cart_body = document.querySelector(".cart_body")
let cart_footer = document.querySelector(".cart_footer");
let icon = document.querySelector(".icon");

if(data_from_LS.length==0){
   
    del_box.innerHTML=`<p class=" ms-3 del">Your Cart Is Empty</p>`
   
 }else if(data_from_LS.length!=0){
    del_box.innerHTML=` <p class="text-danger text-end me-3 del" onclick="del_all()">Delete All</p>`
   
    
 }

 function del_all(){
    
   
    let total = document.querySelector(".total_price")
    del_box.innerHTML=`<p class=" ms-3 del">Your Cart Is Empty</p>`
    data_from_LS=[];
    save_to_ls(data_from_LS)
    cart_icon()
    cart_body.classList.add("invisible")
    total.innerHTML=`0K`
    add_to_cart.innerHTML="Add To Cart"
    add_to_cart.removeAttribute('disabled', '');
  
   
   
 }
icon.addEventListener("click",()=>{
    total_price()
})
function save_to_ls(data){
    localStorage.setItem("Cart_Item",JSON.stringify(data));
}

to_cart_body(data_from_LS)
function to_cart_body(data){
  
    let div = "";
     data.forEach((val,ind)=>{
   
   
        div+=
       `
       <div class="d-flex flex-row  justify-content-between cart_item py-3 border-bottom" id='${val.id}'>
       <div class = "w-50">
       <img src="${val.Img}" alt="" class="ms-3 cart_img" style="height: 80px;">
       </div>
       
   
       <div class="me-3 d-flex flex-column w-50">
           <span class="text-uppercase">${val.title}</span>
           <span class="fw-bold mt-2 mb-2 price">$${val.total_price}</span>
           <div class="d-flex justify-content-around " style="border: 1px solid black;width: 80px;">
       <i class="bi bi-plus-lg" onclick="plus(event,'${val.price}')"></i>
       <span class="quantity_text">${val.quantity}</span>
       <i class="bi bi-dash" onclick="minus(event,'${val.price}')"></i>
     </div>  
       </div>
       <i class="bi bi-x-circle icon_x " onclick="remove_item(event,${ind})"></i>
   </div>
     
       `
     }); 
     cart_body.innerHTML=div;
    //  if(data_from_LS.length==0){
    //     cart_body.innerHTML="Your Cart is empty";
    //     del_box.innerHTML=""
    //  }else{
    //     del_box.innerHTML=` <p class="text-danger text-end me-3 del">Delete All</p>`
  
    //  }
    //  total_price();
     console.log("This is nav")
   }
   
   
function total_price(){
    let cart_total_price = 0;
    let price = document.querySelectorAll(".price");
   price.forEach(val=>{
    let item_price =Number(val.innerHTML.slice(1));
    cart_total_price+=item_price
    
   })
   cart_footer.innerHTML = 
   `
   <div class="d-flex flex-column">
   <span class="text-uppercase fw-bold">Total</span>
   <span class="fw-bold total_price">${cart_total_price}K</span>
</div>
<div>
   <button class="btn btn-dark w-100 h-25 mb-0">Check Out</button>
</div>
   
   `
   console.log("Hello total price works")
}

total_price();

function  plus(e,p){
    let cart_item =e.target.closest(".cart_item");
    let quantity_text = e.target.closest(".cart_item").querySelector(".quantity_text");
    let item_price = e.target.closest(".cart_item").querySelector(".price");
    let price=Number(item_price.innerHTML.slice(1));
    let item_id = cart_item.getAttribute("id");
   
    let user_click_item = data_from_LS.find((item)=>item.id==item_id);
    
     price +=Number(p.slice(1));
     user_click_item.quantity++;
    user_click_item.total_price+=Number(user_click_item.price.slice(1));
     item_price.innerHTML = `$${user_click_item.total_price}`;
    quantity_text.innerHTML = Number(quantity_text.innerHTML)+1 ;

    total_plus(p);
    save_to_ls(data_from_LS)
}

function total_plus(p){
    let total_price = document.querySelector(".total_price");
    let item_price = Number(p.slice(1));
    let total = Number(total_price.innerHTML.substring(0,total_price.innerHTML.length-1))+item_price;
    total_price.innerHTML = `${total}K`
    console.log(total)
}
total_plus();






function minus(e,p){
    let quantity_text = e.target.closest(".cart_item").querySelector(".quantity_text");
    let cart_item =e.target.closest(".cart_item");
    let item_id = cart_item.getAttribute("id");
    if(quantity_text.innerHTML == "1"){
        console.log("equal zero")
        return;
    }
    quantity_text.innerHTML = Number(quantity_text.innerHTML)-1 ;
    let item_price = e.target.closest(".cart_item").querySelector(".price");
    let price=Number(item_price.innerHTML.slice(1));
    let user_click_item = data_from_LS.find((item)=>item.id==item_id);
   
    //  price -=Number(p.slice(1));;
     
     user_click_item.quantity--;
     user_click_item.total_price-=Number(user_click_item.price.slice(1));
     item_price.innerHTML = `$${user_click_item.total_price}`;
    //  user_click_item.price=`$${price}`;
    total_minus(p);
    save_to_ls(data_from_LS)
}

function total_minus(p){
    let total_price = document.querySelector(".total_price");
    let item_price = Number(p.slice(1));
    let total = Number(total_price.innerHTML.substring(0,total_price.innerHTML.length-1))-item_price;
    total_price.innerHTML = `${total}K`
    console.log(total)
}
total_minus()




function remove_item(e,ind){
  
    data_from_LS.splice(ind,1)
    save_to_ls(data_from_LS)
  

    
   let price = e.target.closest(".cart_item").querySelector(".price");
   let img = e.target.closest(".cart_item").querySelector("img").src
   let total_price = document.querySelector(".total_price");
   let new_price =  Number(total_price.innerHTML.substring(0,total_price.innerHTML.length-1))-Number(price.innerHTML.slice(1));
   total_price.innerHTML = `${new_price}K`
   e.target.closest(".cart_item").remove();
   cart_icon();
      
   if(data_from_LS.length==0){
   
    del_box.innerHTML=`<p class=" ms-3 del">Your Cart Is Empty</p>`
   
 }else if(data_from_LS.length!=0){
    del_box.innerHTML=` <p class="text-danger text-end me-3 del" onclick="del_all()">Delete All</p>`
    
 }
   if(img == product_img.src){
    add_to_cart.innerHTML="Add To Cart"
        add_to_cart.removeAttribute('disabled', '');
   }


}

// function cart_icon(){
//     let data = JSON.parse(localStorage.getItem("Cart_Item")) ;
//     cart_link.innerHTML += 
// `<span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger" style="top: 10px !important;z-index: 1;" >
// ${data.length}
// </span>`
// }
// cart_icon();
function back(){
  location.href = "/shop"
}
