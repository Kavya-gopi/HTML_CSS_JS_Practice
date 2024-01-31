let luckynumber;
function generateLuckyNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve(Math.floor(Math.random()*100));
            let num=Math.floor(Math.random()*100);
            setTimeout(()=>{
                if(num%2 !=0) resolve(num);
                else reject("Not a lucky number");
            })
        },3000);
    });
}
setInterval(()=>
generateLuckyNumber().then((data)=>{
    luckynumber=data;
    console.log(luckynumber);
})
.catch((error)=>console.log(error)),1000);
console.log('Lucky number generated is '+luckynumber);
