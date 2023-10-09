//sets are javaScript objects that contain unique values only
// It is used when you want to put only unique values in the object
// the best way to remove duplicate values from an array is to parse it to a set
const numArray = [1,2,3,4,5,6];
const mySet = new Set(numArray);// in this set, you cannot add 3 again
console.log(typeof mySet);

// .add() is used to add item to a set

mySet.add(9);
//console.log(mySet);

//.delete is used to remove value from a set
mySet.delete(2);
//console.log(mySet);

// .clear() is used to clear a Set, i.e remove all items at once
mySet.clear();
//console.log(mySet); 

// .has() is used to check if a avlue exists in a set return a bool
const newSet = new Set([1,3,4,5,6,7]);

if (newSet.has(2) == 0) {
    //console.log("true");
}else{
    //console.log("false");
}

// .forEach() is used to iterate and return a callback for each item.
let oddSet = newSet.forEach((item) => {
    if (item % 2 === 0) {
       newSet.delete(item) 
    }
});
//console.log(newSet);

//removing duplicate values from an array : just parse it to a set

const myArray = [1,2,3,4,5,3,3,4,3,2,3,4,5,6,4,0,8,6,2,2,3,2,4,2,4,2,4,2,4,23,4,2,4];
const myArraySet = new Set(myArray);
//console.log(myArraySet);


// how to get an array from a set
const setArray = [...myArraySet]
//console.log(setArray);

// get the intersection of two sets
const firstNumbers = new Set([2,34,1,4,,6,7,8]);
const secondNumbers = new Set ([9,7,4,2,3,1]);

const intersection = new Set([...firstNumbers].filter(x => secondNumbers.has(x)));

console.log(intersection);

//intersetion of two Arrays
const intersection2 = [];
const num1 = [2,34,1,4,,6,7,8];
const num2 = [9,7,4,2,3,1];
num1.forEach(item => {
    if(num2.includes(item))
    {
        intersection2.push(item)
    }
});
console.log(intersection2);