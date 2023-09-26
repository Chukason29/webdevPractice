// An Array is a variable that can hold multiple values
let myArray = ['fruit', 'vegetable', 'Garri'];

// Arrays can be nested
let theArray = [['Friend', 'Tommyzan'], ['babe', 'Ngozi'], ['Mum', 'Grace']];
console.log(theArray[0][1]);

// Arrays are mutable. i.e the values can be changed even after declaration
myArray[0] = "Rice";
console.log(myArray);// fruit will be replaced with Rice
// A data in a nested array can be picked up
nameArray = [["John", 23], ["cat", 2], ['Jane', 'Lanre','Ngozi']];
console.log(nameArray[2][2]); //this outputs Ngozi

////////////////////////////////////////  Adding Items to arrays/////////////////////////////////////////////////////
/*
    push vs unshift
    pop  vs shift
*/


myArray.push('Carrot', 'Lettuce'); // will add  Carrot and lettuce to myArray
//.push() adds value to the last element
console.log(myArray);

//.pop() removes the last value of an array
let poppedData = myArray.pop();
console.log(poppedData); // outputs lettuce
console.log(myArray); // removes lettuce from the array

//.shift() removes the first item of an 
removeFirstItem = myArray.shift();
console.log(removeFirstItem)// shows the item to be removed
console.log(myArray);

//concat() combines two or more arrays together
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//.every() loops through the items of the array
// use every to check if all the items in an array is following a particular pattern
// if all the items are following the define rule it returns true
// even if one item fails the test .every returns false

const arrayz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// .every() return boolean value... if every item passes the test, it return true. if any item fails the test, 
// it returns false



// filter is used to populate another array with items that passed a test in this current array
const evens = arrayz.filter(
    (item) => item % 2 == 0
);
console.log(evens);  // output all even numbers in arrays

const odds = arrayz.filter( (item) => item % 2 > 0)
console.log(odds); // output all odd numbers in arrays