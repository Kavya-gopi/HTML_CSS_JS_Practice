const fetchProducts=async ()=>{
    let products;
    try{
        let response=await fetch("https://fakestoreapi.com/products");
        products=response.json();//only data from response object
        console.log(products);
        return products;
    }catch(error){
        console.log(error);
    }
}
let products=fetchProducts();
console.log(products);

async function displayProducts(){
    let content=document.getElementById('content');
    let products=[];
    try{
        products=await fetchProducts();
    }catch(error){
        console.log(error);
    }
    let newProducts=products.map((p)=>{
        
        const {title,description,price,category,image}=p;
        return `<section>
        <h4>${title}</h4>
        <img src="${image}" alt="img" height="140px" width="140px">
        <h5>${description}</h5>
        <h6>${category}</h6>
        <hr>
        
        </section>`
    }).join(' ')
    content.innerHTML=newProducts;

}
displayProducts();
