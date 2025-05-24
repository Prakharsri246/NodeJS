# All the code inisde module is wrapped inside a function which makes it private hence we are unable to access them inside other modules.
# when we use require("./path-of-file) so it creates a / wraps code
# This function is IIFE(Immediatly invoked function expression) 
   (function(){ // anonymous function
    ----
    ----
   })();
it can be used only when we export using module.exports 

# keeps your variable and functions safe (private) , code will not interfare 

# The module, require are present indie our nodejs and it passed inside function parameter IIFE

(function a(module, require){  // this is done by NodeJs 

})(module,require)



# If we have a module say xyz.js which is doing some task, Now if we require("/xyz.js") inside other module by exporting it using module.exports 

So Nodejs creates a IIFE and then executes xyz.js and then passes it to v8 engine to run js on the server
 
--------------------------------------------------------------------------------------------------------------------------------------

# 5 step mechanism of Require 

- Resolving the module => It checks ./localpath , .json, node:module , what kind of data is coming

- Loading the module -  File content is loaded according to file type

- Wraps inside an IIFE (Compile step)--> Module.wrap[0] +  script + Module.wrap[1]; //its just string concatination
(function(exports,require,module, __filename, __dirname)  //IIFE
{
    //All the code of your module
})

- CODE EVALUATION- code is execute and module.exports is returned

- Caching- Then the module is cached / for ex if say our xyz.js is required by multiple components so it will not run all above processes once it is done then other times it will just return this xyz.s using caching
 
Wrapped inside  IIFE and then shared to v8 engine

All the utlitiy mrhtods are present inside lib folder

-----------------------------------------------------------------------------------------------------------------------------------------

# The require function is being build by module.prototype.require() --> returns require;

there is function wrapModuleLoad function is doing Module.load--> checks if modules is cached or not

# If we do not provide empty inside the require("")--> then it will give
that ID shouldn't be a non empty string.

 
 
 