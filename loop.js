// for(let i=1;i<=5;i++){
//    console.log(i); 
// }

// for(let i=0;i<=20;i=i+2){
//     console.log(i);

// }

//backwards

// for(let i=20; i>=1; i=i-2){
//     console.log(i);
// }

// for (i=5;i<=50;i=i+5){
//     console.log(i)
// }

// let n=prompt("Write a number of the table you want :");
// n=parseInt(n)
// for (let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

//Nested loop
// for (let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }


//Fav movie guess
// const favMovie="One piece";

// let guess=prompt("Guess my fav movie");

// while((guess!=favMovie)&&(guess!="quit")){
//     guess=prompt("Wrong guess. please try again");
// }
// if (guess==favMovie){
//     console.log("Cong, you guessed it right");
// }else{
//     console.log("quit");  
// }

// let i = 1;
// while (i <= 5) {
//     if (i == 3) {
//         break;
//     };
//     console.log(i);
//     i++;
// };

// let fruits=["mango","apple","banana","litchi","orange"];
// fruits.push("pineapple");
// for (let i=0;i<=fruits.length; i++){
//     console.log(i, fruits[i]);
// }


//Loops with nested array
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder man", "flash"]];
// for (let i = 0; i <= heroes.length; i++) {
//     console.log(i, heroes[i]);
//     for (j = 0; j < heroes[i].length; j++) {
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let student=[["abdul",95],["aleem",100],["ansari",98]];
// for (let i=0;i<student.length;i++){
//     console.log(`info of student #${i+1}`);
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j])
//     }
// }

//for of loop
// let fruits=["mango","apple","banana","orange","litchi"];

// for (fruit of fruits){
//     console.log(fruit); 
// }
// for(char of"coding"){
//     console.log(char);
// }

//nested for of loop
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder man", "flash"]];
// for(list of heroes){
//     for(name of list){
//          console.log(name); 

//     }  
// }