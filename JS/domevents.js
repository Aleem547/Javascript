//onclick
// let btns=document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick=sayHello;
// }

// function sayHello(){
//     alert("Hello"); 
// }
//onmouseenter
// let btns=document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function(){
//         console.log("you entered a button");
//     };
//     console.log(dir);
// }
// function sayHello(){
//     alert("Hello"); 
// }

//addeventlistner
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
// }
// function sayHello(){
//     alert("Hello"); 
// }
// function sayName(){
//     alert("Some");
// }

//Example
// let btn=document.querySelector("button");

// btn.addEventListener("click",function() {
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor;

//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;

//     console.log("color updated");

// });

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }


//this
// let btn=document.querySelector("button"); 
// let p=document.querySelector("p");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");

// function changeColor(){ 
//     console.dir(this.innertext);
//     this.style.background="blue";
// }
// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);

// let inp =document.querySelector("input");

// inp.addEventListener("keydown",function(){
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     console.log("Key was pressed");
// });
// inp.addEventListener("keyup",function(){
//     console.log("Key was released ");
// });


//game character movement 
// let inp =document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("code=",event.code);//ArrowUp,ArrowDown,Arrowleft,Arrowright
//     if(event.code=="ArrowUp"){
//         console.log("character moves forward");
//     }else if (event.code=="ArrowDown"){
//         console.log("character moves backward");
//     }else if (event.code=="ArrowLeft"){
//         console.log("character moves left");
//     }else if (event.code=="ArrowRight"){
//         console.log("character moves right");
//     }
// });

// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form submitted");
// });


// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(form);

//     let user = this.element[0]; //form.element[0]
//     let pass = this.element[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password us set to ${pass.value}`);

// });