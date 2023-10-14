//function parameters are variables declared during function definition

function funcName(x, y, z) { // x, y, z are function parameters
    return x + y + z;
}
console.log(funcName(10,20,35)); // 10, 20, 35 are function arguments

//function rest parameter (...)
// This is used when there are no definite number of parameters

function addNums(...args) {
    let totalSum = 0;
    for (const arg of args) {
        totalSum += arg
    }
    return totalSum;
}
console.log(addNums(2, 23, 2, 4, 7, 6, 90, 23, 15, 28));

// the keyword argument is an array of all the arguments in a function
function primeNums() {
    
}