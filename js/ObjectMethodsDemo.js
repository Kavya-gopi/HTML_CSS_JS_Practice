const print=(obj)=>console.log(obj);
let products={title:"laptop",price:30000};
let user={name:"keerthi",email:"abc@gmail.com",password:"1234"};
let address={street:"abc street",doorNo:112};
let employee={role:"developer",salary:26000};
print(products);
print(user);
print(address);
//object methods
console.log(Object.keys(products));
console.log(Object.values(products));
console.log(Object.entries(products));
//combining objects
let userDetails={...user,...address};
console.log(userDetails);
//object method-assign
const combineObj=Object.assign({},user,address);
console.log(combineObj);
//object destructing
const {name,email}=user;
console.log({name,email});

//Object freeze-Immutable Object

delete employee.salary;//trying to delete salary from employee
console.log(employee);
Object.freeze(employee);
console.log(employee);
//seal-we can update or modify the values but we cannot add/remove the properties
Object.seal(user);
user.name="kavya";
console.log(user);
user.email="bcd@gmail.com";
console.log(user);

let names=["adam","smith","james","jack"];
console.log(names);
names.forEach((n,i,names)=>{
    names[i]=n.toUpperCase();
})
console.log(names);

//JSON
const student={"name":"adam","age":20};
console.log('student details '+JSON.stringify(student));
const emp='{"name":"adam","age":20}';
console.log(JSON.parse(emp));


