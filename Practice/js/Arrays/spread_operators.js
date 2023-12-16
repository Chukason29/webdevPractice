"use strict"
// Spread operator is used to store all the items of an array
 const myArray = [1,2,3,4,5,6,7];
 const myArray2 = [...myArray];
 console.log(myArray2);// every item in myArray has been transferred into myArray2
 

const numArray = [11,222,52,64,25,27,447,3,92,91,135,];
// THIS METHOD OF FINDING MAX AND MIN NUMBERS ISN'T EFFICIENT THE BEST METHOD IS THE "HOME MADE" METHOD
// To get the highest number in an array, use Math.max.apply(null, arrayName)
let maxNumber = Math.max.apply(null, numArray);
//console.log("maximum number is: " + maxNumber);
// From the above, we mustn't use the .apply when we can just use te spread operator
let maxNum = Math.max(...numArray)
console.log(maxNum);

let minNumber = Math.min.apply(null, numArray);
//console.log("minimum number is: " + minNumber);
// From the above, we mustn't use the .apply when we can just use te spread operator
let minNum = Math.min(...numArray)
console.log(minNum);
