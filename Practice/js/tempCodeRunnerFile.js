"use strict";
// this keyword is a very funny stuff
/*
    this function refers to the object that calls it
*/
// let us start with the window object
// Note every function, variable in the global scope belongs to the window object

var num1 = 1; // this belongs to the window object

console.log(window.num1);