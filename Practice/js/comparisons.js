// Never you compare values of different types, They might give unexpected results
// Always convert to same type before any comparison

function checkAge(age) {
    var votableAge;
    if (isNaN(age)) {
        votableAge = "This is not a number";
    }else{
        votableAge = (age < 18) ? "Not in age range" : "In age range";
    }
    return votableAge;
}
console.log(checkAge(17));

// Sometimes you want access a property of an object that might not exist
//instead of making it to throw an error, use the chaining operator (?.)

car = {
    model : 'AX007',
    price : 12000,
    color: "Yellow"
}

console.log(car?.model);
