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

//deleting an object property
delete student.color;
console.log(student);


//Always project object mutation using Object.freeze()
const myObject = {
    name: "Chukwuebuka",
    age: 29
}
Object.freeze(myObject)
//myObject.age = 30; // This throws an error
console.log(myObject);