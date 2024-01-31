function calculateSalary(deduction,bonus){
    this.salary=this.salary-deduction+bonus;
}
function displayEmployee(){
    console.log(`${this.name} ${this.age} ${this.salary}`);
}

let employee1={
    name:'Adam',
    age:20,
    salary:10000
}
let employee2={
    name:'Clara',
    age:22,
    salary:22000
}

displayEmployee.call(employee1);
calculateSalary.call(employee1,100,2000);
displayEmployee.call(employee1);

//2nd employee
displayEmployee.call(employee2);
calculateSalary.call(employee2,200,2000);
displayEmployee.call(employee2);

//apply
console.log("apply method")
displayEmployee.apply(employee1);
calculateSalary.apply(employee1,[100,200]);//pass value or method arguments as arrays
displayEmployee.apply(employee1);

console.log("--------------------------------");

//bind method
console.log("Bind method")
let bindDisplay=displayEmployee.bind(employee1);
bindDisplay();
console.log(bindDisplay);
