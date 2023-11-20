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
console.log(newObject);
