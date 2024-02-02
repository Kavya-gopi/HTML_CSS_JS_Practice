const displayProducts=async ()=>{
    let products;
    try{
        let response=await fetch("https://fakestoreapi.com/products/category/jewelery");
         return response.json();
        //console.log(products);
    }catch(error){
        console.log(error);
    }

}
let products=displayProducts();
console.log(products);

async function displayProductsInweb(){
    let displaycontent=document.getElementById('displaycontent');
    let products=[];
    try{
        products=await displayProducts();
    }catch(error){
        console.log(error);
    }
    
    let newProduct=products.map((p)=>{
        const {title,image,price,id,description}=p;
         return `<section>
          <h3>${title}</h3>
          <img src="${image}" alt="img" height="140px" width="120px">
          <h4>${description}</h4>
          <h3>${id}</h3>
          <h3><b>${price}</b></h3>
          <hr>
        </section>`
    }).join(' ');
    displaycontent.innerHTML=newProduct;
    

}
displayProductsInweb();