//.splice() methods splits and return the splitted array
// syntax//
// array.splice(startIndex, Num. of Item to remove, optionally items to add original Array)

//THINGS TO NOTE About .splice()
// The original array will be mutated
// splice returns an array

const Nums = [1,2,3,4,5,6,7,8,9,0,4,5]
let spliceNum = Nums.splice(8, 3, 20, 21, 22, 23)
console.log("spliced array: " + spliceNum);
console.log(Nums);// notice how 20, 21, 22, 23 was added to spot spliced out


/********************************SLICE METHOD******************************************** */
// unlike .splice(), .slice does not tamper with the original array ( Better :-) )
// It takes only two parameters
// .slice() returns an array
// SYNTAX array.slice(startingIndex, endIndex)
// Note the value of the endIndex wont be added to the returned array

const numArray = [6, 4, 4, 3, 7, 9, 10, 16, 17]
const slicedNumArray = numArray.slice(3, 6)
console.log(slicedNumArray);