//errors.js
// try is always used to run any particular code.
// catch is used too tramp any error found
//finally will a

try {
    let age = "18";
    if (isNaN(age)) throw "Your input isn't a number";
    if (age < 18) throw "Not up to a voting age";
} 
catch (error) {
    console.log(error);
}
finally{
    console.log("Thanks for visiting");
}