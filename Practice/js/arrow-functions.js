"use strict";
//the arrow function is used to write shorter functions

//old function way

function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(2,5));

//another way of writing the function
//if the statements in the curly braces is just one the remove the return statement
//and the curly braces
const addNumber2 = (a, b) => {
    return a + b;
}
console.log(addNumber2 (23,6));