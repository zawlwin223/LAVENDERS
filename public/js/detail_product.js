
let card = document.querySelectorAll(".card");
card.forEach((card)=>{
    card.addEventListener("click",(e)=>{
       
    let card_id = e.target.parentNode.getAttribute("id");
     location.href=`/shop/${card_id}`
       
    })
});




