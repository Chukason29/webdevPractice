"use strict"
// Array destructuring is a method of unpacking data
const myArray1 = ["a", "b", "c", "d", "e", 'f']
const myArray2 = [1, 2, 3, 4, 5, 6]

let [x, y] = myArray1

// This give you "ab" cos x, y takes the first two items in myArray1
console.log(x+y)

//you can skip item in an arry using array destructuring
let [a,, b, c] = myArray1

// This gives you "acd", cos the 2nd item "b" was skipped 
//due to the extra comma when destructuring
console.log(a+b+c);

// You can use the spread operator to get the remaining items
const [m, p, ...arr] = myArray1
console.log(m + p + arr);

//You can use spread operator to concatenate arrays
const newArray = [...myArray1, ...myArray2];
console.log(newArray);// formed a new array

//You can use array destructuring to swap variables
let num1 = 5;
let num2 = 10;
[num2, num1] = [num1, num2]
console.log(num2); // This will give you 5 cos num1 and num2 swapped
//Array destructuring in functions
//return an array of the add, sub, multiply and divide of two nums
function arrayNum(a, b) {
    return [a+b, a-b, a*b, a/b]
}

const [sum, sub, multiply, division] = arrayNum(6,4);
console.log(`sum = ${sum}\nsub = ${sub}\nmultiply = ${multiply}\ndivision = ${division}`);
