// function hello(){
//     console.log("hello");
// }

// function printName(){
//     console.log("Abdul");
// }

// function print1to5(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }

// function isAdult(){
//     let age=18;
//     if(age>=18){
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }
// isAdult();
// print1to5();
// printName();
// hello();

//Dice
// function rollDice(){
//     let rand=Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// rollDice();
// function studentInfo(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// studentInfo("aleem","23");

// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,1);

// function calcAvg(a, b, c) { 
//     let avg = (a + b + c) / 3;
//     console.log(avg);
// }

// calcAvg(2, 2, 2);

// function printTable(n) {
//     for (let i = n; i <= n * 10; i += n) {
//         console.log(i);
//     }
// }
// printTable(10);  

// function sum(a,b){
//     console.log("hello");
//     console.log("hello");
//     return a+b;
// }

// function isAdult(age){
//     if(age>=18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
// }

// function getSum(n){
//       let sum=0;

//       for(let i=1;i<=n;i++){
//           sum+=i;
//       }
//       return sum;
// }

// let str=["hi","hello","bye","!"];
// function concat(str){
//     let result="";

//     for(let i=0;i<str.length;i++){
//         result+=str[i];
//     }
//     return result;
// }

//Scope
// let sum = 54; //Global Scope
// function calSum(a, b) {
//     let sum = a+b; //Function Scope
//     console.log(sum);
// }
// calSum(1, 2);
// console.log(sum);

//block scope
// {
// let a = 25;
// }
// console.log(a);

// for (let i = 1; i <= 5; i++){
//     console.log(i);//block scope
// }
// console.log(i);

// let age=25;
// if(age>=18){
//     let str ="adult";
// }

// console.log(str);

//lexical scope
function outerfunc() {
    let x = 5;
    let y = 6;
    function innerfunc() {  //function scope
        let a = 10;
        console.log(x);
        console.log(y);
    }
    innerfunc();
}
//function expression
let name = "aleem";
let x = 5;

let sum = function (a, b) {
    return a + b;
}
let hello = function () {
    console.log("hello");
}
hello = function() {
    console.log("namaste");
    }