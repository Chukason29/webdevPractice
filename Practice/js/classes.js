'use_strict'
// A class is construct used in creating objects
// always create a constructor to create template for objects

class Student{// always Capitalize class names
    constructor(fname, sname, age, complexion,grade){// A construstor is always needed
        // initializing class properties
        this.fname = fname;
        this.sname = sname;
        this.age = age;
        this.complexion = complexion;
        this.grade = grade
    }
    //Then create methods for to make use of the properties
    firstClass(leastGrade){
        let sureGrade = this.grade > leastGrade ? "you're a first Class student" : "second class";
        return sureGrade;
    }    
}
const benchMarkGrade = 80;
const tommyZan = new Student("yartomizan", "Amades",28,"dark", 92);
console.log(tommyZan.firstClass(benchMarkGrade)); // accessing class' method);

const wisdom = new Student("wisdom", "Imaoye", 27, "dark", 98);
//Adding custom property to the objects
tommyZan.eyeColor = "green"; //eyeColor is strictly only for tommyzan Object
console.log(tommyZan.eyeColor);


//////////////////////////////  INHERITANCE //////////////////////////////////////
// use the extend keyword to inherit all the methods of the class
// use the super keyword to inherit all the properties of a class


// INHERITANCE //

class Car {
    constructor(name, color, type, price){
        this.name = name;
        this.color = color;
        this.type = type;
        this.price = price;
    }
    checkType() {
        let typeResult = ""
        if (this.type == "Salon") {
            typeResult = "This is a small car";
        }else if(this.type == "SUV"){
            typeResult = "This is a large car";
        }
        return typeResult;
    }
}

const newCar = new Car("Tesla", "White", "Salon", 20000)
console.log(newCar.name);

class Suv extends Car{
    constructor(name, color, type, price, engineSize, tyreType){
        super(name, color, type, price); // super helps in inheriting properties
        this.engineSize = engineSize;
        this.tyreType = tyreType;
    }
}

const toyotaCar = new Suv("Prado", "Yellow", "SUV", 40000, 8, "Large");

for(const key in toyotaCar){
    console.log(`${key}: ${toyotaCar[key]}`);
}

// toyotaCar an object of Suv class inherited the checkType method due from Car class
console.log(toyotaCar.checkType());


////////////////// STATIC METHOD /////////////////////////////////////////

// static methods are methods that are exclusive used within a class
// an object created from that class can't even use a static method
