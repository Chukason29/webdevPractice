// Arrays are mutable. i.e the values can be changed even after declaration
myArray[0] = "Rice";
//console.log(myArray);// fruit will be replaced with Rice
// A data in a nested array can be picked up
const nameArray = [["John", 23], ["cat", 2], ['Jane', 'Lanre','Ngozi']];
//console.log(nameArray[2][2]); //this outputs Ngozi

////////////////////////////////////////  Adding Items to arrays/////////////////////////////////////////////////////
/*
    push vs unshift
    pop  vs shift
*/


myArray.push('Carrot', 'Lettuce'); // will add  Carrot and lettuce to myArray
//.push() adds value to the last element
//console.log(myArray);

//.pop() removes the last value of an array
let poppedData = myArray.pop();
//console.log(poppedData); // outputs lettuce
//console.log(myArray); // removes lettuce from the array

//.shift() removes the first item of an 
let removeFirstItem = myArray.shift();
//console.log(removeFirstItem)// shows the item to be removed
//console.log(myArray);

//concat() combines two or more arrays together
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const arr3 = arr1.concat(arr2);
//console.log(arr3);