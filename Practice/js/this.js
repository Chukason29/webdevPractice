"use strict"; // always use this
/*
    this function refers to the object that calls it
*/
// let us start with the window object
// Note every function, variable in the global scope belongs to the window object

var num1 = 1; // this belongs to the window object
//console.log(this.num1); //this will return 5
let color = "Red";
//using this in an object
const car = {
    name: "Audi",
    model: "Au192",
    color: "White",
    price: 10000,
    speed: 100,
    brake: function (){
        // this here can reach the object hence prints out white
        console.log(this.color);
        function brake2() {
            console.log(this);
            // the this will not be able to reach the object hence
            // it will call the window object
        }
        brake2() // 
    }
}
// To solve the issue above, use the arrow function to write the inner function
const car2 = {
    name: "Innoson",
    model: "Ikenga",
    color: "Silver",
    price: 21000,
    speed :200,
    brake: function () {
        console.log(this.color);
        const brake2 = () => this.color; // arrow function
        console.log(brake2());
    }
}



car.brake();


