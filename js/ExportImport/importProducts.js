import products from './productsExportImport.js';

//console.log(products);

/*let list=document.getElementById("myProducts");

products.forEach((item) => {
    let li=document.createElement("li");
    li.innerText=` title: ${item.title} 
    id: ${item.id} price: ${item.price} 
    quantity: ${item.quantity}`;
    list.appendChild(li);



});
function createCheckbox(itemText){
    const checkbox=document.getElementById('input');
    checkbox.type='checkbox';

    const listItem=document.createElement('li');
    listItem.appendChild(checkbox);

    const textNode=document.createTextNode(itemText);
    listItem.appendChild(textNode);

    document.getElementById('myProducts').appendChild(listItem);
}

products.forEach(item=>{
    createCheckbox(item);
})*/

let display='';
products.map(p=>
    display=display+
    `<input type='checkbox' class='mycheckbox'
    value='${p.id} ${p.title} ${p.price}'>
    ${p.id} ${p.title} ${p.price} <br>`);

document.getElementById('content').innerHTML=display;
let checkboxes=document.querySelectorAll('.mycheckbox');
for(let i=0;i<checkboxes.length;i++){
    checkboxes[i].addEventListener('change',displaySelectedValue)
}

function displaySelectedValue(){
    let selectedValue='';
    for(let i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            selectedValue=selectedValue+`${checkboxes[i].value}<br>`
        }
    }
    document.getElementById('selected').innerHTML=selectedValue;
}

