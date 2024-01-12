let products=[
    {
        id:1,
        title:"abc",
        price:100,
        quantity:2

    },
    {
        id:2,
        title:"soap",
        price:200,
        quantity:3 
    },
    {
        id:3,
        title:"cheese",
        price:200,
        quantity:10
    }
];

products.forEach(p=>{
    console.log(`
    ${p.id}
    ${p.title}
    ${p.price}
    ${p.quantity}`)
})
/*
const startk=names.filter(name=>name.startsWith("k"));
console.log(startk);
*/
const pro=products.filter(p=>(p.title.includes('so')));
console.log(pro);

const searchBytitle=(searchStr)=>{
    return products.filter(p=>p.title.includes(searchStr))
}
console.log(searchBytitle('so'));
console.log(searchBytitle('ch'));

function findProduct(id){
    //return product
    /*const name2=names.find(name=>name.includes("l"));
      console.log(name2); */
    return products.find(p=>p.id==id);
}
console.log(findProduct(3));

console.log(findProduct(4));
console.log(findProduct(1));
function display(){
    let amount=0;
    products.forEach((p)=>{
        console.log(`${p.id} ${p.title} ${p.price} ${p.quantity} ${p.price*p.quantity}`);
        amount=amount+p.price*p.quantity;

    });
    console.log(`Total Price ${amount}`);
}
display();
function display(){
    let amount=0;
    products.map((p,index)=>{
        console.log(`${index+1}) ${p.id} ${p.title} ${p.price} ${p.quantity} ${p.price*p.quantity}`);
        amount=amount+p.price*p.quantity;

    });
    console.log(`Total Price ${amount}`);
}
display();




const calculateTotalPrice=()=>{
    return products.reduce((tot,p)=>tot+p.price*p.quantity,0)
}
console.log(calculateTotalPrice());


