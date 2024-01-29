const add=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const mul=(a,b)=>a*b;
const div=(a,b)=>a/b;

function operation(a,b,fun){
    return fun(a,b);
}

console.log(operation(10,20,add));
console.log(operation(10,20,sub));
console.log(operation(10,20,mul));
console.log(operation(10,20,div));