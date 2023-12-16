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
//best practice is adding properties to the constructor function but add method to their prototypes not to te objects

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

//always add methods to the prototype of the object not to the object itself
Product.prototype.priceSlash = function(){
    const priceEligibility = this.price <= productPrice() ? "Eligible" : "Not Eligible";
    return priceEligibility;
}

const myCar1 = new Product("Innoson", 12600, "Red", 120);
console.log(myCar1.priceSlash());