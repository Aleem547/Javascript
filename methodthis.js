// const student ={
//     name: "shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// function getAvg() {
//     console.log(this);
// }

//try and catch 
// console.log("hello");
// console.log("hello");
// //let a=5;
// try{
//     console.log(a);
// }catch (err){
//     console.log("caught  and error a is not defined");
//     console.log(err);
// }
// console.log("hello2");

// const sum=(a,b)=>{
//     console.log(a+b);
// };
// const cube=(n)=>{
//     return n*n*n;
// };

//implicit return 
// const sum=(a,b)=>(a+b);

// console.log("hi there");
// setTimeout(() => {
//     console.log("javascript ");  
// }, 4000); 

// console.log("welcome to");

console.log("hi there");
let id =setInterval(() => {
    console.log("javascript ");  
}, 4000); 

console.log(id);

let id2=setInterval(()=>{
    console.log("hello world");
},3000);

console.log(id2);
