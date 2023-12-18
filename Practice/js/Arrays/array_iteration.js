const products = [
    {
        name: 'Nissan',
        price: 6000,
        model: "Infinity"
    },
    {
        name: 'Audi',
        price: 22000,
        model: "Opel"
    },
    {
        name: 'bmw',
        price: 3000,
        model: "Racer"
    },
    {
        name: 'Innoson',
        price: 3500,
        model: "Ikenga"
    },
    {
        name: 'benz',
        price: 25000,
        model: "GL300"
    },
    {
        name: 'Porsche',
        price: 20000,
        model: "Light"
    }
];

//.forEach() method loops through an array and perform actions on the each item
// let us reduce the price of each item by 10% and output all the products
//console.log(products.forEach(priceReduction));
let productList ="";

//reducing each price by 10%
products.forEach((item) => {
    item.price -= item.price/10;
    //console.log(item);
});

products.forEach((product)=>{ //This is the alternative of using normal function
    productList += product.name + '\n'+ product.price + '\n'+ product.model + '\n\n';
    //console.log(productList);
});


// NEVER assign a forEach iteration to a variable like .map, .filter, .find, etc
/* While the .forEach performs actions on each array, it doesn't create a new array
    To create a new array after performing such functions, use .map()

    .map() doesnt change the values of the current array
    It create a new array for its actions
    .map() return only an array
*/
//reducing price by 10% using .map

let priceReduction = products.map((item) =>{
    item.price -= item.price / 10;
    return item;
});
console.log(priceReduction);

//////////////////  OR  /////////////////////////////

function priceRed(item) {
    item.price -= item.price / 10;
    return item;
}
//console.log(products.map(priceRed));

// .flatMap()
/*
    This method returns an array
    It map the array and then flatten it
    To flatten means making multidimensional array to be a single array
*/
const arrayPairs = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let singleArray = arrayPairs.flatMap(function(item) {
    item = item.reduce(function(a, b) { return a + b})
    return item;
});
//console.log(singleArray);

const nums = [1,4,5,6,7,8,2,5,7,8,9,3,1,4,5,6,3,2];

// .reduce is used to the total summation of a numerical array
// reduce can have four parameters which are
//.reduce( accumulator, current value, index of current iteration, array used)

reducedNum = nums.reduce(function(a, b) { return a + b});
//console.log(reducedNum);


//indexOf() is used to output the first index of an item, if there are more than two items, the index of the first item is returned
// if the item is not found, it returns -1 if found, return the index
// syntax array.indexOf(item, start) where start is the place where the search starts n the array

let indexOfNum = nums.indexOf(5, 4); // search for num 5 starting from index 4
//console.log(indexOfNum);

//.lastIndexOf () returns the index of the last item in an array
//console.log(nums.lastIndexOf(6));

//.includes() returns boolean if an item is found in an array or not
// .includes() can also be used on String as string can also be seen as an array

//console.log(nums.includes(3));
//Let us use filter and includes methods to find products
// let us search for car names in a car archive
const carName = "AU";
const carSearch = products.filter((item) =>
   item.name.toLowerCase().includes(carName.toLowerCase())
);
console.log(carSearch);
