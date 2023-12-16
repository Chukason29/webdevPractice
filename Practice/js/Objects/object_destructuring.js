"use strict"
// This is used to simplify access to objects properties

const product1 = {
    name: "Saxophone",
    price: 15500,
    color: "gold",
    brand: "Yamaha",
    seller: {
        name: "Gopandy",
        phone:"09039444542"
    }
}

//instead of doing product1.propertyName do 
//you can even give a propertyName another name e.g name is now productName
// you can also use the spread operator to get the remaining items
const {name: productName, price, ...otherItems} = product1 // product1 as been destructured



console.log(`Product name: ${productName}\nProduct Price is ${price}\n ${otherItems}`);
//console.log(brand);

// The seller property which has object as a value can also be destructured
const {seller:{name: sellerName, phone}} = product1
console.log(`Seller is ${sellerName}`);

// using the spread operator, you can concat two objects
//Object destructuring in functions

function getProduct({name:productName, price}) {
    console.log(`Product name: ${productName}\nPrice: ${price}`);
}

getProduct(product1)

