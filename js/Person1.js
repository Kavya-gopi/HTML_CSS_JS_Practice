class Person{
    constructor(name,age,gender){
        this._name=name;
        this._age=age;
        this._gender=gender;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get gender(){
        return this._gender;
    }

    set name(newName){
        this._name=newName;
    }
    set age(newAge){
        this._age=newAge;
    }
    set gender(newGender){
        this._gender=newGender;
    }

    welcome(){
        console.log("Welcome",this.name);
    }


}


let person1=new Person('James',33,'M');
person1.welcome();
person1.name='John';//set name() will be called
person1.welcome()

//getter methods

console.log(person1.name);//get name() will be called
console.log(person1.age);//get age() will be called
console.log(person1.gender);//get gender() will be called