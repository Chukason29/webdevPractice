"use strict"
// The bind method can be used when you want an object to use 
// a method/function not belonging to it

const student = {
    fname: "Lucky",
    lname: "Elechi",
    grade: 90,
    fullName: function(){
        return `${this.fname} ${this.lname}`;
    }
}
console.log(student.fullName()); // accessing method belonging to same object

const isFirstClass = function () {
    let averageScore = 75;
    if (this.grade > averageScore) {
        return "First Class";
    }else{
        return "Second Class";
    }
}

let checkClass = isFirstClass.bind(student);
console.log(checkClass());

class Animal{
    constructor (name, family, feetType){
        this.name = name
        this.family = family
        this.feetType = feetType
    }
    speedType() {
        let isFast = this.feetType >= 4 ? "very fast" : "Not so fast";
        return isFast;
    }
}

const dog = new Animal("dog", "Mammal", 4);
console.log(dog.speedType())// outputs very fast

// let us bind the dog object to a function out the class
const isBabyAlive = function(){
    if(this.family === "Mammal"){
        return 'baby is born alive';
    }else{
        return 'baby is not born alive';
    }
}

let checkBaby = isBabyAlive.bind(dog);
console.log(checkBaby()); // outputs baby is born alive

////////////////////// VERY IMPORTANT ////////////////////////////

// Whenever the method of an object is used as a callback function, this is used
// hence use .bind() to presere the this for that object
