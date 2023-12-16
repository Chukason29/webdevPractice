//Iterating over an object 
const student = {
    fname: "Ngozi",
    lname: "Fred",
    age: 28,
    color: "ebony"
}

// the for in loop is the best way to iterate over an object
for (const key in student) {
    console.log(
        `${key} : ${student[key]}`
    );
}
// Use the .hasOwnProperty() method to check if a property exist in an object
function checkProp(obj, prop) {
    if (Object.hasOwnProperty.call(obj, prop)) {
        console.log(obj[prop]);
    }else{
        console.log("Not Exist");
    }
}