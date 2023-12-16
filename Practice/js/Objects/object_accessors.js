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

//Object Accessors
// THE GETTERS AND SETTERS IS THE  BEST METHOD OF SETTING AND GETTING 
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
