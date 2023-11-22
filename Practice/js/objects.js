"use strict"
//object definition Or Object creation
const objectName =  {};
console.log(typeof  objectName);

//Populating an object
objectName.name = "Ebuka";
objectName.age = 29;
console.log(objectName);

//objects are mutable they can be changed
objectName.name = "James";
console.log(objectName);

// newObject and objectName and exact samething
// any changes made to newObject, automatically affects objectName
const newObject = objectName;
newObject.name = "Ngozi";
console.log(objectName);// {name: Ngozi, age: 29}

// objects can also be accessed using []
console.log(objectName["name"]);

// objects can also be accessed using variable name
let myName = "name";
console.log(objectName[myName]);


//Iterating over an object 
const student = {
    fname: "Ngozi",
    lname: "Fred",
    age: 28,
    color: "ebony"
}

// the for in loop is the best way to iterate over an object
for (const key in student) {
    console.log(
        `${key} : ${student[key]}`
    );
}

//deleting an object property
delete student.color;
console.log(student);

//converting object to a map
const newMap = new Map(Object.entries(student));

for (const [key, value] of newMap) {
    console.log(`${key} : ${value}`);
}

//Object methods
const person1 = {
    name: "Wisdom",
    age: 29,
    voteEli: function(){
        const isEligible = this.age >= 18 ? "Yor are eligible" : "You are not eligible"
        return isEligible
    }
}
console.log(person1.voteEli());

// you can access the voteEli method from another object with the call() 
// or apply method()
const person2 = {
    name: "Grace",
    age: 16
}
console.log(person1.voteEli.call(person2));

//Nested Objects 
const property = {
    name: "Polycarp",
    age: 72,
    cars: {
        car1: "Audi",
        car2: "Innoson",
        car3: "Porsche"
    },
    houses: 2
}
// How caan we access car2

console.log(property.cars.car3);