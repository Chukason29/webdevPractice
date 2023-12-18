//object definition Or Object creation
const objectName =  {};
console.log(typeof  objectName);

//Populating an object
objectName.name = "Ebuka";
objectName.age = 29;
console.log(objectName);

//when defining a method in an objectName, ES6 eliminates the function keyword and the colon
const carRide = {
    gear: 3,
    setGear(newGear){
        this.gear = newGear
    },
    getGear(){
        return this.gear
    }
}
carRide.setGear(5)
console.log(carRide.getGear())




//Using Object Destructuring to access objects
const Products = [
    {
        name: "Saxophone",
        price: 14000,
        categories: ["Musicals", "Woodwind"],
        color_categories: ["Gold"]
    },
    {
        name: "Electric Cooker",
        price: 5000,
        categories: ["electronics", "Home Appliances", "Women"],
        color_categories: ["black", "Red"]
    },
    {
        name: "32 Inch Television",
        price: 23000,
        categories:["electronics", "Home Appliance", 'Enjoyment'],
        color_categories: ["black"]
    },
    {
        name:"A set of 4 Male Vest",
        price: 2500,
        categories: ["Fashion", "Men Fashion", "Inner Wears"],
        color_categories: ["White"]
    },
    {
        name: "A set of 4 Female Vests",
        price: 12000,
        categories: ["Fashion", "Female Fashion"],
        color_categories: ["White", "Pink", "Gold"]
    }
]
//Project: Get All Item with in Fashion Category
// Project2: Slash the price of a given category by given percentage(%),


///////////////////////////   PROJECT 1    ///////////////////////////////////
// This function returns an array of product objects having similar category
//Using object Destructuring
const categoryArray = (arrayName, category) => {
    const categoryItems = arrayName.filter(({categories}) => {
        return categories.includes(category.toLowerCase())
    })
    return categoryItems;
}
//console.log(categoryArray(Products, "electronics"));

/////////////////////////   PROJECT 2     ////////////////////////////////////
// This function slashes price of any category by any part
const categoryPriceSlash = (arrayName, percent) => {
    const priceSplashMap = arrayName.map((item) => {
        item.price = (percent/100) * item.price
        return item
    })
    return priceSplashMap
}
console.log(categoryPriceSlash(categoryArray(Products, "electronics"), 50));