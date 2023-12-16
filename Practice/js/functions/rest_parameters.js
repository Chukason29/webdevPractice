"use strict"
// rest parameters are used when te number of arguments are unknown

function add(a, b){// here the number of parameters are known
    return a + b;
}
console.log(add(4, 6));

function addNum(...args) {
    let totalNum = 0
    for (const item of args) {
       totalNum += item 
    }
    return totalNum;
}

// here the function call can accept  any number of arguments
console.log(addNum(1,2,3,4,5,6,7,8,9));

//using stated parameters with rest parameters

function addNumber(a, b, ...args) {
    let totalNum = a + b;
    for (const item of args) {
        totalNum += item
    }
    return totalNum
}
console.log(addNumber(32,4,5,6,12));

//NOTE: A function definition can only have one rest parameter
//An it must be the last parameter

const Mean = (...args) =>{
    let totalNum = args.reduce((x, y) => x + y);
    return totalNum / args.length
}
console.log(Mean(10,21,32,41));
