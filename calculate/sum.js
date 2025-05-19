//by default modules are protected from leaking variables and method
console.log("Sum code is here");

var x ="Prakhar";
function cal(a, b) {
  const sum = a + b;
  console.log("Sum is: ", sum); 
}

module.exports = { x:x,  cal:cal }; //exporting module