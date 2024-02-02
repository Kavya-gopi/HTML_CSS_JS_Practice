let is_shop_open=true;
function placeOrder(){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            resolve("Your shop is opened");
        }
        else{
            reject("Shop closed");
        }
    })
}
function order1(){
    console.log('Step 1');
    console.log('Step 2');
    placeOrder().then((data)=>console.log(data))
                .catch((error)=>console.log(error));
    console.log('Step 3');
    console.log('Step 4');
}
order1();

//async await
async function order(){
    console.log('Step 1');
    console.log('Step 2');
    try{
        let response=await placeOrder();
        console.log(response);
        console.log('payment');
    }catch(error){
        console.log(error)
    }
    console.log('Step 3');
    console.log('Step 4');
}
order();

