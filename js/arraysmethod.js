let numbers=[10,12,3,4,1,89,34,88];

numbers.forEach(n=>console.log(n));

//filter method--arrays and strings

const evenNumbers=numbers.filter(n=>n%2==0);
console.log(evenNumbers);
const oddNumbers=numbers.filter(n=>n%2!=0);
console.log(oddNumbers);

let names=["kavya","keerthi","gokila","james","john"];
const containsA=names.filter(name=>name.includes("ke"));
console.log(containsA);

const startk=names.filter(name=>name.startsWith("k"));
console.log(startk);

//map method
const square=numbers.map(n=>n*n);
console.log(square);

const capitalize=names.map(name=>name.toUpperCase());
console.log(capitalize);

//find method
const name1=names.find(name=>name.includes("a"));
console.log(name1);

const firstEvenNum=numbers.find(n=>n%2==0);
console.log(firstEvenNum);

const name2=names.find(name=>name.includes("l"));
console.log(name2);

const firstOddNum=numbers.find(n=>n%2!=0);
console.log(firstOddNum);
//reduce()-->which makes the array round off value
//reduce()-->left to right
const sum=numbers.reduce((acc,num)=>acc+num,0);
console.log(sum);

const product=numbers.reduce((acc,num)=>acc*num,1);
console.log(product);

const a=[1,4,5,60,80,100];
const diff=a.reduceRight((prevDiff,n)=>prevDiff-n);
console.log(diff);
//shift and unshift
console.log(a);
a.unshift(200);//adds elements to the front of an array
console.log(a);
a.shift();//remove elements from the front of the array
console.log(a);

let values=[10,20,30,40,50];
console.log(values);

values.splice(2,3,80,90);//startindex,deletecount,items[] to be added
console.log(values);
console.log(values.slice(2,5));

//slice will return a subarray without modifying the original array 
//splice will remove and add new items in the original array


























