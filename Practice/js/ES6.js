"use strict"
function checkScope() {
    let i = 'function scope'; // This is 
    if (true) {
      let i = 'block scope'; //different from this i cos of "let"
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
console.log(checkScope());

// variables with declared with const can be mutated but
// can't be reassigned

//Always project object mutation using Object.freeze()
const myObject = {
    name: "Chukwuebuka",
    age: 29
}
Object.freeze(myObject)
//myObject.age = 30; // This throws an error
console.log(myObject);

// Default parameter
// default parameter is used when the matching argument of that
// parameter is not place during function call
const addNum = (a,b = 7) =>  a + b
console.log(addNum(10, 15)); // output 25 cos b is given
console.log(addNum(10)); // output 17 cos b is not given


//REST PARAMETERS
// rest parameters allows flexible function calls
// with rest parameter, you can use as many arguments as possible

function restPara(...args){
    return args
}
console.log(restPara(1,2,3,4,5,6,7,8,9)); //returns 9 cos 9 arguments were parsed

//NOTE: The rest parameter is return as an array hence array
//functions like map, filter, map
const add = restPara(1,2,3,4,5,6,7,8,9).filter((n) => n % 2 == 0)
console.log(add);


// rest parameter with other parameters
function restParam(b, ...args)
{
    return args.map((element) => b * element)
}
console.log(restParam(2, 3, 4, 5, 7, 8, 9));