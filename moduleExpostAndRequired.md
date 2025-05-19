# Modules are basically js code which are private to itself

# Common js module export and import (CJS)

# Require function to make work different modules together
require("./path-of-file")

# Modules are protected by default - hence you won't be able to access variables and method inside another module with require statement 
you need export and import the method so that it can be used

console.log(module.exports) --- >  {} empty object

# export
module.expots= functionName;

# import
const functionName =  require("./filePath"); // Synchronous way (after this only code will move to next line)

# multiple export 
by creating the object 
module.exports= {variableName: variableName , functionName: functionName}
the above can be short hand to this as js will automatically assume it as an object.
module.exports={variableName, functionName} 

module.exports.x = x;
module.exports.cal = cal;

# Now to import use  
const obj =  require("./file-Path")
const {x , cal} = require("./file-Path"); destructuring

# Non strict mode
-----------------------------------------------------------------

# ES Module export (MJS) - Standard way of importing
# strict mode
export functionName(){
    -----
    -----
}

import {funtionName} from "./path-of-file" //Async way 



# When a folder is created having multiple modules say multiply and sum you create a single file which is index.js inisde which you can require the different modules and while importing you can use it by just importing modules from index.js


const {multiply} = require("./multiply.js"); //importing module
const {cal} = require("./sum.js"); //importing module

module.exports = {
    multiply,
    cal
}

const {multiply, cal} =  require("./calculate"); //importing module


# importing json
{
    "name":"John Doe",
    "city" : "New York",
    "age" : 30
}


const data = require('./data.json');