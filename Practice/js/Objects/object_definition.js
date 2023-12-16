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