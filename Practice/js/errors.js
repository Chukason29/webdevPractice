//errors.js
// try is always used to run any particular code.
// catch is used too tramp any error found
//finally will a
try {
    console.log(great);
} 
catch (error) {
    if (ReferenceError) {
        console.log(error.name);
        console.error("nice");
    }
}
finally{
    console.log("Urrrrrgh, finally code ran");
}