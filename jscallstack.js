// function hello(){
//     console.log("insise the hello fnx");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello finx");
//     hello();
// }

// console.log("calling emo fnx");
// demo();
// console.log("done,bye");

// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();

//single threaded lang ,syncronous
// let a=25;
// console.log(a);
// let b=10;
// console.log(b);
// console.log(a+b);


//browser delay the task, it stores in call stack , which is also called asyncronous nature
// setTimeout(()=>{
//     console.log("Aleem");
// },2000);

// console.log("hello..."); 

//callback hell
// h1=document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if (nextColorChange)nextColorChange();
//     },delay);
// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//          changeColor("green",1000,()=>{       
//             changeColor("blue",1000,()=>{      
//       });
//     });
//     });
// });

//normal method
// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb(
//     "Portfolio",
//     ()=>{
//         console.log("success:your data was saved");
//         savetoDb(
//             "hello world",
//             ()=>{
//                 console.log("success2 :data2 saved");
//                 savetoDb(
//                     "Aleem",
//                     ()=>{
//                         console.log("success 3:data saved");
//                     },
//                     ()=>{
//                         console.log("failure:weak connection");
//                     }
//                 );
//             },
//             ()=>{
//                 console.log("failure:weak connection");
//             }
//         );
//     },
//     ()=>{
//         console.log("failure:weak connection data dat not saved");
//     }
// );

//promises method
// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("data was savedd");
//         }else{
//             reject("failed");
//         }
//     });
// }
// savetoDb("Aleem");

//promise then()and catch()
// let request=savetoDb("Aleem");//req=promise object
// request.then(()=>{
//     console.log("promise was resloved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// });

//aternate method to write
// savetoDb("Aleem")
// .then(()=>{
//     console.log("promise was resloved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request);
// });

// // improved version
// savetoDb("Aleem")
// .then(()=>{
//     console.log("data1 saved");
//     return savetoDb("helloword");
// })
// .then(()=>{
//     console.log("data saved2");
//     return savetoDb("Aleem");
// })
// .then(()=>{
//     console.log("data saved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// });


//refactoring old code , method
h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!")
        }, delay);
    });
}

changeColor("red", 1000)
    .then(() => {
     console.log("red color was completed");
     return changeColor("orange", 1000);
    })

    .then(() => {
     console.log("orange color was completed");
    return changeColor("green", 1000);
        })

    .then(() => {
     console.log("green color was completed");
     return changeColor("blue", 1000);
    })
    .then(() => {
     console.log("blue color was completed");
    });

                

