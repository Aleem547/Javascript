// const student ={
//     name:"aleem",
//     age:23,
//     marks:95
// };
// const item={
//     price:100.99,
//     discount:50,
//     colors : ["red","pink"]
// };

//CREATE A POST

// const post={
//     username:"aleem_547",
//     content:"This is my first post",
//     likes:150,
//     reposts:5,
//     tags:["@aleem_547","@something"]
// };

// const obj={
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// }; 

// const student={
//     name:"aleem",
//     city:"new delhi"
// };

//objects of objects
// const classInfo={
//     abdul:{
//         grade:"A+",
//         city:"Delhi"
//     },
//     aleem:{
//         grade:"A",
//         city:"Delhi"
//     },
//     ansari:{
//         grade:"B+",
//         city:"Delhi"
//     }

// };

//Array of object
// const classInfo=[
//     {   name:"abdul",
//         grade:"A+",
//         city:"Delhi"
//     },
//     {   name:"aleem",
//         grade:"A",
//         city:"Delhi"
//     },
//     {   name:"ansari",
//         grade:"B+",
//         city:"Delhi"
//     }

// ];
// const random=Math.floor(Math.random() *10)+1; 

//guessing game
const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;

    }

    if (guess == random) {
        console.log("you are right! congrats !! ");
        break;
    } else if (guess<random){
        guess= prompt ("hint: Your guess was too small")
    }else{
        guess=prompt("hint: your guess was too large")
    }
}