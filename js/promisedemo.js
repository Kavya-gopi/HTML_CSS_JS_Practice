let product_availability=true;
//based on the availability of the product
//this function has to either resolve/reject

function placeOrder(){
    return new Promise((resolve,reject)=>{
        if(product_availability){
            resolve('Your order is placed');
        }
        else{
            reject('Product is not available');
        }
    })
}
//method1
placeOrder().then((data)=>console.log(data))
.catch((error)=>console.log(error));