class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    welcome(){
        console.log("Welcome",this.name);
    }
}

class Student extends Person{
    constructor(name,age,gender,grade){
        super(name,age.gender);
        this.grade=grade;
    }
    displayGrade(){
        console.log("Grade is",this.grade);
    }
}

let person=new Person('Keerthika',23,'Female');
person.welcome();
person.name='Johnna';//can be modified
person.welcome();

let student1=new Student('Kavya',21,'Female','A');
student1.welcome();
student1.displayGrade();