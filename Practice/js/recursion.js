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