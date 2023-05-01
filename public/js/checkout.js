let data = JSON.parse(localStorage.getItem("Cart_Item"))
let table = document.querySelector(".table")
let subtotal = document.querySelector(".subtotal")
let shipping = document.querySelector(".shipping")
let final = document.querySelector(".final")
let total = 0;
let tr = ""

data.forEach((val)=>{
    total+=Number(val.total_price)
    console.log(val.total_price)
tr+=`
<tr>
<td><img src="${val.Img}" alt="" style="width: 25%;"> </td>
<td class="w-50">${val.title} <br> QTY : ${val.quantity}</td>
<td>$${val.total_price}</td>
</tr>
`
})
table.innerHTML= tr;
subtotal.innerHTML=`$${total}`;
final.innerHTML = `$${total+Number(shipping.innerHTML.slice(1))}`;

