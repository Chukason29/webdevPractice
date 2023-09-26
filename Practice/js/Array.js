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