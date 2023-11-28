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
// you cant access an object property using dot notation when trying to use a
//variable
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
// Use the .hasOwnProperty() method to check if a property exist in an object
function checkProp(obj, prop) {
    if (Object.hasOwnProperty.call(obj, prop)) {
        console.log(obj[prop]);
    }else{
        console.log("Not Exist");
    }
}
checkProp(student, 'age');
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

//objects can be converted to array
const propertyArray = Object.values(property)
console.log(propertyArray);

//Object Accessors
// THE GETTERS AND SETTERS IS THE  BEST METHOD OF SETTING AND GETTING VALUE
// FROM AN OBJECT ESPECIALLY FOR SECURITY PURPOSES

const Student = {
    fname: "Grace",
    lname: "Alaegbu",
    age: 55,
    get fullName(){
        return this.fname + " " + this.lname
    }
}
console.log(Student.fullName); // notice how we use fullName instead of fullName()


// Object Constructors
/*
    Object Constructors are use to create template for objects
*/
// Declaring an object constructor
function Pupil(name, age, myClass, height, grade) {
    this.name = name;
    this.age = age;
    this.myClass = myClass;
    this.height = height;
    this.grade = grade
}

//creating objects from Pupil constructor
let newPupil = new Pupil("Wisdom", 28, "SS1", 1.67, 90);
for(const key in newPupil){
    console.log(
        `${key} : ${newPupil[key]}\n`
    );
}

//You cannot add properties to object constructor like the way we do with objects
// Pupil.motherName = "Grace" wont fly
/*, 
    To add properties or methods to a constructor, we use PROTOTYPES;
*/
//best practice is adding properties to the constructor function but add method to their prototypes

function Product(name, price, color, size) {
    //always add properties to the constructor function
    this.name = name;
    this.price = price;
    this.color = color;
    this.size = size;
}

function productPrice(){
    return 10000;
}

//always add methods to the prototype of the object
Product.prototype.priceSlash = function(){
    const priceEligibility = this.price <= productPrice() ? "Eligible" : "Not Eligible";
    return priceEligibility;
}

const myCar1 = new Product("Innoson", 12600, "Red", 120);

console.log(myCar1.priceSlash());