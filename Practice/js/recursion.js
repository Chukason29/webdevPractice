//Recursion is a concept where a function call itself within itself

//The three parts of a recursive function are:
//Functional itself
//Base condition ==> This tells the function when to stop calling itself
// The functional call ==> 

//Using recursion to populate an array with a range of numbers

const emptyArray = [];
function fillArray(startPoint, endPoint, myArray)
{
    if(startPoint > endPoint){
        return 1
    }else
    {
        myArray.push(startPoint);
    }
    fillArray(startPoint + 1, endPoint, myArray);
}
fillArray(1, 20, emptyArray);
console.log(emptyArray);

//recursion to get the factorial
function factorial(n) {
    if(n == 0) {
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(5));

//Write a recursive function, sum(arr, n), 
//that returns the sum of the first n elements of an array arr.
const arraySum = [10,5,8,21,12,16]
function sum (arr, n)
{
    if(n == 0)
    {
        return 0;
    }else{
        return arr[n-1] + sum(arr, n-1);
    }
}
console.log(sum([2, 3, 4], 1));

/*We have defined a function called countdown with one parameter (n).
The function should use recursion to return an array containing the integers
n through 1 based on the n parameter. If the function is called 
with a number less than 1, the function should return an empty array. For example,
calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your 
function must use recursion by calling itself and must not use loops of any kind.
*/

function countdown(n) {
    //base case
    if(n <= 0){
        return []
    }else{
        countArray = countdown(n-1)
        countArray.unshift(n)
        return countArray
    }
}
console.log(countdown(10));

/*
We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins 
with a number represented by the startNum 
parameter and ends with a number represented by the endNum parameter. The 
starting number will always be less than or equal to the ending number. Your 
function must use recursion by calling itself and not use loops of any kind. 
It should also work for cases where both startNum and endNum are the same.
*/

// Algorithm
// if endNum > startNum return []
// numRange = function call + 1
// push startNum to numRange return numRange

function rangeOfNumbers(startNum, endNum)
{
    if(startNum > endNum){
        return []
    }
    const numRange = rangeOfNumbers(startNum + 1, endNum);
    numRange.unshift(startNum);
    return numRange
}
console.log(rangeOfNumbers(3, 3));
