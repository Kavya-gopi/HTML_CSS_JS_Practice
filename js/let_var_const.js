// function letAndVarDemo(){
//     console.log(v);
//     var v='hello';
//     for(const i=0;i<3;i++){
//         console.log(i);
//     }
//     console.log(i);
//     console.log(v);
// }
// letAndVarDemo();
//using  `` in the console
let x=10;
let y=20;
function add(x,y){
    const sum=x+y;
    console.log(`The sum of ${x} and ${y} is ${sum}`);
}
//arrowfunction
add(x,y);

console.log(`one
two
three`);

//Arrays

let numbers=[10,20,30,40,50];//[10,20,30,40,50,100]
console.log(numbers.length);
let num=[60,70,80];
console.log(numbers.concat(num));
numbers.push(100);
console.log(numbers);
console.log(num);
console.log(numbers.slice(0,6));
console.log(numbers.slice(-2));
console.log(numbers);

let array1=[10,20,30,40];
let array2=[...array1];
console.log(array1);
console.log(array1);
console.log(array2);

console.log(array1.push(50));
console.log(array1);
console.log(array2);
function square([...array]){
   for(let i=0;i<array.length;i++){
    array[i]=array[i]*array[i];
   }
   console.log(array);
}
square(array2);
console.log(array2);

const username="kavya";
const charArr=[...username];//spread operator will make the string to charArray
console.log(username);
console.log(charArr);

//arrow function
const add1=(x,y)=>x+y;
const sub=(x,y)=>x-y;
const mul=(x,y)=>x*y;
const div=(x,y)=>x/y;

console.log(add1(1,3));
console.log(sub(4,3));
console.log(mul(10,18));
console.log(div(2,1));


//foreach in array
let n=[10,20,30,40,50,60];
n.forEach(function(n1,i){
    console.log(n1+" "+i);
})
console.log("arrowFunction");

n.forEach((n1,i,array)=>{
    console.log("Value :"+n1+" "+"Index: "+i);

    console.log(array);
})
const number = [1, 2, 3, 4, 5];
number.forEach((number, index, array) => {
    console.log(array[index]*2);
});




