//Async
console.log('1. Step 1');
setTimeout(()=>console.log('2. Step 2'),3000);
setTimeout(()=>console.log('3. Step 3'),1000);
console.log('4. Step 4');
console.log("-----------------------");
//Synchronous---call back
console.log("Synchronous-call back");
console.log('1. Step 1');
setTimeout(()=>{
    console.log('2. Step 2');
    setTimeout(()=>{
        console.log('3. Step 3');
        console.log('4. Step 4');
    },1000);
},2000);