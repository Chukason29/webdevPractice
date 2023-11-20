// Maps are used to create key, value pairs

const myMap = new Map();
// use the set method to add values to maps
let firstName = "Tommyzan"; age = 23; color = "fair"; height = 1.57; studentNumber = "ADM001";

let mapKey = {id:"p001"}; // never use a direct object as a map key instead assign to a variable first
const ourMap = new Map([
    [1, "Tommyzan"],
    [2, "Ngozi"],
    [3, "Chidera"],
    [mapKey, {name:"Tommyzan", age: 29}]
]);

console.log(ourMap.entries());
const studentMap = new Map();
studentMap.set(studentNumber, {name:firstName, age: age, color:color, height: height});
//console.log(studentMap);

//taking the id of an object and making it the key of an entry in a maps
const userObject = {
    id : "ASD001",
    name: "Emaginary",
    age: 23,
    height: 1.62,
    color: 'ebony'
}
const userMap = new Map();
userMap.set(userObject.id, {
    name: userObject.name,
    age: userObject.age,
    height: userObject.height,
    color: userObject.color
})

//function to get the just the name of an entry in a Map

function nameMap(mapName, mapKey) {
    if (mapName.has(mapKey)) {
       return mapName.get(mapKey).name;
    }
}
//console.log(nameMap(studentMap, studentNumber));

const allUsers = new Map();

allUsers.set(1, { name: "Tommyzan", age: 29, color: "Dark" })
allUsers.set(2, {name:"Wisdom", age: 28, color:"Fair"})
//console.log(allUsers.keys());

for (const [key, value] of allUsers) {
    //console.log(`my Name is ${allUsers.get(key).name}`);
}


const productsMap = new Map();

productsMap.set({id:"p001"}, { name: "Nike Clothes", color: "Red", price: 4000});
productsMap.set({id:"p002"}, { name: "Addida Shoe", color: "White", price: 7500});
productsMap.set({id:"p003"}, { name: "Baleciaga T-shirt", color: "Blue", price: 11000});

// How to know the size of the map
console.log(productsMap.size);
// how to get just the product IDs
        // using for of loop
        for (const key of productsMap.keys()) {
            console.log(key);
        }
// how to just get the values
        // using for of loop
        for (const value of productsMap.values()) {
            console.log(value);
        }
        
// how to get the key and value pairs
        //using for of loop
        for (const [key, value] of productsMap) {
            if (value.price > 10000) {
                continue
            }
            console.log(`${key.id} => \n\t${value.name}\n\t${value.color}\n\t${value.price}`);
        }
    
    //using forEach method
        productsMap.forEach((value, key) => { //notice the arrangement of the key, value
            console.log(`${key.id} => \n\t${value.name}\n\t${value.color}\n\t${value.price}`);
        })

    // A two-dimensional array can be changed to a map;
    const myArray = [
        [1, "Ngozi"],
        [2, "Fred"],
        [3, "Chinyere"]
    ];

    const arrayMap = new Map(myArray);
    console.log(arrayMap.size);
    console.log(arrayMap.get(1));

    // converting a array to a Map using the spread operator
    const mapArray = [...arrayMap];

    const theArray = mapArray.map(item => {
        return item[1] == "Ngozi"
    })
    //console.log(theArray);