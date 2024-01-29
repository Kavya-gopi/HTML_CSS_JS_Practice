import products from './productsExportImport.js';

//console.log(products);

let list=document.getElementById("myProducts");

products.forEach((item) => {
    let li=document.createElement("li");
    li.innerText=` title: ${item.title} id: ${item.id} price: ${item.price} quantity: ${item.quantity}`;
    list.appendChild(li);

});

