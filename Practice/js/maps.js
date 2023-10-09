// Maps are used to create key, value pairs

const myMap = new Map();

// use the set method to add values to maps
let firstName = "Tommyzan"; age = 23; color = "fair"; height = 1.57; studentNumber = "ADM001";


const studentMap = new Map();
studentMap.set(studentNumber, {name:firstName, age: age, color:color, height: height});
//console.log(studentMap);

//taking the id of an object and making it the key of an entry in a map
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
console.log(nameMap(studentMap, studentNumber));

// Map methods