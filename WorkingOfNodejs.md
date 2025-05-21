# All the code inisde module is wrapped inside a function which makes it private hence we are unable to access them inside other modules.
# when we use require("./path-of-file) so it creates a / wraps code
# This function is IIFE(Immediatly invoked function expression) 
   (function(){ // anonymous function
    ----
    ----
   })();
it can be used only when we export using module.exports 

# keeps your variable and functions safe (private) , code will not interfare 

# The module, require are present indie our nodejs and it passed inside function parameter

(function a(module, require){  // this is done by NodeJs 

})(module,require)