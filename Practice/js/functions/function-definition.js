"use strict"
// Function Declaration

// function declarations are not executable, they are saved for later use
function funcName(parameters) {
    //function expressions
}
//example

function printOut() {
    return "Hello World";
}

//printOut();
//Function Expressions
//function expressions are functions that are stored into a variable

const addFunction = function(a, b) {
    return a + b;
}
console.log(addFunction(1,2));


//function calls can be stores in variables
//const myFunc = printOut();
const myFunc =  printOut() +' of USA'; // Hello world of USA
console.log(myFunc);

//functions can also be seen as objects
console.log(myFunc.length);

// ARROW FUNCTIONS

const multiplyNums = (a, b) => a * b
////////////////   OR  //////////////
const multiplyNums2 = (a, b) => {return a * b}

console.log(multiplyNums(3, 6)); // 18
console.log(multiplyNums2(3, 6));// 18