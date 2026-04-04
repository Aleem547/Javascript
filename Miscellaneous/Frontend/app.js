//Prototype
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// arr1.sayHello = () => {
//     console.log("hello!, i am arr");
// };
// arr2.sayHello = () => {
//     console.log("hello!, i am arr");
// };

//Factory function
// function PersonMaker(name,age){
//     const Person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1=PersonMaker("adma",25);//copy
// let p2=PersonMaker("eve",25);//copy

//Constructor  doesn't return anything And start with capital
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
// }

// Person.prototype.talk=function(){
//     console.log(`Hi, my name is ${this.name}`);
// };

// let p1=new Person("adam",25);
// let p2=new Person("eve",25);

//class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     };
// };

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);

//inheritance
class Person{
    constructor(name,age){
        console.log("Person class constructor")
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor")
         super(name,age)//parent constructor is being called
        this.marks=marks;
    }
    
    
}
class Teacher extends Person{
    constructor(name,age,subject){
       super(name,age)//parent constructor is being called
        this.subject =subject;
    }
    
}