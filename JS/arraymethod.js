//Array methods
// forEach
// map
//filter
//some
//every
//reduce

//forEach
// let arr=[1,2,3,4,5];

// arr.forEach((el) => {
//     console.log(el);
// });
// arr.forEach(function(el) {
//     console.log(el);
// });

// let arr=[{
//     name:"abdul",
//     marks:95,
// },{
//     name:"aleem",
//     marks:94.4,
// },{
//     name:"ansari",
//     marks:92,
// },
// ];
// arr.forEach((student)=>{
//     console.log(student.marks);
// });

//MAP FILTER

// let students=[{
//     name:"abdul",
//     marks:95,
// },{
//     name:"aleem",
//     marks:94.4,
// },{
//     name:"ansari",
//     marks:92,
// },
// ];
// let gpa=students.map((el)=>{
//     return el.marks/10;
// })

// let nums=[1,2,3,4,7,8,9,10,12,11];
// let ans =nums.filter((el)=>{
//     return el%2==0;  //evn ->true , odd ->false
// })

// let nums=[1,2,3,4];
// let finalVal=nums.reduce((res,el)=>{
//     console.log(res);
//    return res+el;
// });
// console.log(finalVal);

// let arr=[1,4,,2,5,6,7,,2,9,2];

// let max=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

//default parameter

// function sum(a,b=2){
//     return a+b;
// }

// let arr=[1,2,3,4,5];
// let newArr=[...arr];
// console.log(newArr);

// let chars=[..."hello"];

//spread(object  literals)
// const data ={
//     email:"abdulaleem5470@gmail.com",
//     password:"abcd",
// };
// const dataCopy={...data,id:547};

// let arr=[1,2,3,4,5,6];//val
// let obj1={...arr};//obj->key:val

// let obj2 ={..."hello"};

//REST
// function sum(...args){
//     return args.reduce((sum,el)=>sum+el);
// }
// function min(...args){
//     console.log("hello");
//     return args.reduce ((min,el)=>{
//         if (min>el){
//             return el;
//         }else{
//             return min;
//         }
//     });
// }

//Destruction
// let names=["tony","bruce","peter","steve","peter","tom","daredevil","punisher"];
// let [winner,runnerUp,secondRunnerUp,...others]=names;

//Destruction(objects)
// const student={
//     name:"aleem",
//     age:23,
//     class:9,
//     subject:["hindi","urud","english","math"],
//     username:"aleem547@gmail.com",
//     password:"abcd"
// };
// let {username:user,password:secret,city="delhi"}=student;
