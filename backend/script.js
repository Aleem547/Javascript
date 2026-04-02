// let n = 5;

// for (let i = 0; i < n; i++) {
// console.log("hello,", i);

// console.log("bye!");

// let args = process.argv;

// for (let i = 2; i < args. length; i++) {
// console. log("hello to ", args[i]);

// }

// const info=require("fruits");

// console.log(info);


//export
import{sum} from "./math.js";  

console.log(sum(1,2));    
//require is old and import is new.We can't selectively load only the pieces we need with require but with import, we can selectively load only
//the pieces we need, which can save memory.

//oading is synchronous for 'require' but can be asynchronous for 'import'.