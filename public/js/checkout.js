let data = JSON.parse(localStorage.getItem("Cart_Item"))
let table = document.querySelector(".table")
let subtotal = document.querySelector(".subtotal")
let shipping = document.querySelector(".shipping")
let final = document.querySelector(".final");
let form = document.querySelector(".form")
let total = 0;
let tr = ""

let email = document.querySelector("#email")
let firstName = document.querySelector("#firstName")
let lastName= document.querySelector("#lastName")
let address = document.querySelector("#address")
let city = document.querySelector("#City")
let phone = document.querySelector("#phone")
let zip = document.querySelector("#zip")
let country = document.querySelector("#country")

let user_data = {};
let product=[];


form.addEventListener("submit",(e)=>{
    e.preventDefault();

 
     user_data.email = email.value
     user_data.firstName = firstName.value
     user_data.lastName = lastName.value
     user_data.address = address.value
     user_data.city = city.value
     user_data.phone = phone.value
     user_data.zip = zip.value
     user_data.country = country.value
     
     fetch("/CheckOut/Order",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(user_data)
     })
     .then((response) => response.json())
     .then(() =>
     location.href="/CheckOut/Order"
    
     ).then(()=>{
        localStorage.removeItem("Cart_Item")
     })



})

data.forEach((val)=>{
    product.push({id:val.id,qty:val.quantity,price:val.total_price,img:val.Img,title:val.title})
    total+=Number(val.total_price)
    console.log(val.total_price)
tr+=`
<tr>
<td class="align-middle"><img src="${val.Img}" alt="" style="width: 50%;"> </td>
<td class="w-50 align-middle">${val.title} <br> QTY : ${val.quantity}</td>
<td  class="align-middle">$${val.total_price}</td>
</tr>
`
})
table.innerHTML= tr;
subtotal.innerHTML=`$${total}`;
final.innerHTML = `$${total+Number(shipping.innerHTML.slice(1))}`;

user_data.product = product

