"use strict"
// An Array is a variable that can hold multiple values
let myArray = ['fruit', 'vegetable', 'Garri'];

// Arrays can be nested
let theArray = [['Friend', 'Tommyzan'], ['babe', 'Ngozi'], ['Mum', 'Grace']];
//console.log(theArray[0][1]);



//.every() loops through the items of the array
// use every to check if all the items in an array is following a particular pattern
// if all the items are following the define rule it returns true
// even if one item fails the test .every returns false

const arrayz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// .every() return boolean value... if every item passes the test, it return true. if any item fails the test, 
// it returns false even if only one item doesn't pass the test
const allFruits = ["Mango", "Orange", "Lime"];
let fruitCheck = allFruits.every((item) => item.length >= 5);
//console.log(fruitCheck);
let isArrayAllEven = arrayz.every((item) => item % 2 == 0);

//console.log(isArrayAllEven); // returns false because arrayz has odd numbers also

//.some() loops through th array to check if there some values in the
// array passes a given test

let isEvenPresent = arrayz.some((n) => n % 2 === 0);
//console.log(isEvenPresent); // will ouput true because some even numbers are in the array

// filter is used to populate another array with items that passed a test in this current array
const evens = arrayz.filter(
    (item) => item % 2 == 0
);
//console.log(evens);  // output all even numbers in arrays

const odds = arrayz.filter( (item) => item % 2 > 0)
//console.log(odds); // output all odd numbers in arrays


// .sort() is used to sort string data in an array in an ascending order

const places = ["zoo", "congo", "Nigeria", "China", "Denmark", "Malta"];
//console.log(places.sort());

// to sort strings in a descending order, then use .reverse()
//console.log(places.reverse());

// You cant use the sort() just like that to sort numbers

const numbers = [3,5,4,23,12,54,17,15,28,62];

//console.log(numbers.sort)// This wont work at all
let descendSort = numbers.sort((x, y) => x - y);
//console.log(descendSort);
let ascendSort = numbers.sort((x, y) => y - x);
//console.log(ascendSort);
const products = [
    {
        name: 'Nissan',
        price: 6000
    },
    {
        name: 'Audi',
        price: 22000
    },
    {
        name: 'bmw',
        price: 3000
    },
    {
        name: 'Innoson',
        price: 3500
    },
    {
        name: 'benz',
        price: 25000
    },
    {
        name: 'Porsche',
        price: 20000
    }
];

let ascendSortedProducts = products.sort((x, y) => x.price - y.price);
//console.log(ascendSortedProducts); // starts with the product with the lowest price

let descendSortedProduct = products.sort((x ,y) => y.price - x.price);
//console.log(descendSortedProduct); // starts with the highest price

//sorting objects by strings

function objectStringSort(a, b) {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x > y) { return 1;}
    if (x < y) { return -1;}
    return 0;
}

const productStringSort = products.sort((a, b) =>
 a.name.toLowerCase() > b.name.toLowerCase()
)
console.log(productStringSort);
console.log(products.sort(objectStringSort));

// Now let us get collec just the price lower than 10K
let filteredPrice = products.filter((item) => item.price <= 10000);
//console.log(filteredPrice);

const numArray = [11,222,52,64,25,27,447,3,92,91,135,];

// THIS METHOD OF FINDING MAX AND MIN NUMBERS ISN'T EFFICIENT THE BEST METHOD IS THE "HOME MADE" METHOD
// To get the highest number in an array, use Math.max.apply(null, arrayName)
let maxNumber = Math.max.apply(null, numArray);
//console.log("maximum number is: " + maxNumber);

let minNumber = Math.min.apply(null, numArray);
//console.log("minimum number is: " + minNumber);


//Home Made method of finding Min and Max values which is the best

//Getting the MaxValue

function maxValue(arr) {
    let lengthOfArray = arr.length;
    let max = -Infinity;
    while (lengthOfArray--) {
        if (arr[lengthOfArray] > max) {
            max = arr[lengthOfArray];
        }
    }
    return max;
}
console.log(maxValue(numArray));

function minValue(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }  
    return min;
}

// Mode of an array
function arrayMode(arr){
    let numCheck = [];
    let modeNum = 0;
    let ourMode = 0;
    let numCount = 0
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (numCheck.includes(num) == 0) {
            numCheck.push(num);
            arr.forEach(element => {
                if (num === element){
                    numCount++;
                }
            });
        }
        if (numCount > modeNum){
            ourMode = arr[i];
        }       
    }
    return ourMode;
}
const modeArrays = [1,1,1,1,2,2,2,3,3,3,6,2,7,8,2,1,1];
console.log(arrayMode(modeArrays));