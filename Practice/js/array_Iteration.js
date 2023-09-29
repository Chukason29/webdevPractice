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

/*function listAllProducts(product) {
    productList += product.name +"\n" + product.price + "\n" + product.model +"\n\n";
    return productList;
}*/
products.forEach((product)=>{ //This is the alternative of using normal function
    productList += product.name + '\n'+ product.price + '\n'+ product.model + '\n\n';
    //console.log(productList);
});



/* While the .forEach performs actions on each array, it doesn't create a new array for it it only changes 
    the current array.
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
//console.log(priceReduction);

//////////////////  OR  ////////////////////////////////////////////////////////////

function priceRed(item) {
    item.price -= item.price / 10;
    return item;
}
//console.log(products.map(priceRed));