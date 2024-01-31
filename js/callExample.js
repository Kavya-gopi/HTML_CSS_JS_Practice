let person={
    name:'John',
    age:20,
    // sayHello:function(){
    //     console.log(`${this.name} ${this.age}`)
    // }
}

function sayHello(){
    console.log(`${this.name} ${this.age}`);
}

let person1={
    name:'James',
    age:21
}

// person.sayHello();
// person.sayHello.call(person1);

sayHello.call(person);
sayHello.call(person1);