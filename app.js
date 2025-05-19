//Read Evaluate Print loop -->REPL
require("./xyz.js"); //one module into another module
// import { cal } from "./sum.js";
//const obj = require("./sum.js"); //importing module
// const {x , cal} = require("./calculate/sum.js"); //destructuring
// const {multiply} = require("./calculate/multiply.js"); //destructuring

const {multiply, cal} =  require("./calculate"); //importing module
const data = require('./data.json');
var namee = "Node js namaste"



var a = 10;
var b= 20;
//obj.cal(a, b); //function call
cal(a, b); //function call
multiply(a, b); //function call
console.log(data); //importing json file
//  console.log(a+b);
//  console.log(namee);
//  console.log(global);
 // console.log(globalThis);
 //console.log(obj.x); //accessing variable
 

 