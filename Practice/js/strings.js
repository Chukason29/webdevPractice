// String a literal in single or double quotes

let myString = "I am a \"double quotes\"";
//console.log(myString);

/*
    \n = new line
    \t = tab space
*/
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

//string concatenation
let fname = "chukwuebuka";
let sname = "alaegbu";

let fullname = fname + ' ' + sname;
console.log(fullname);

// string can also be concatenated using the += operatorp

let babe = "Ngozi";
babe += " is my babe";

console.log(babe);


// GETTING length of string
let string = "asasdsdasgsddssdsgasdgsadgsadgasdgasgsa";
console.log(string.length); // equals 39

// In javascript, strings are indexed
let nameOfFootballer = "Cristiano Ronaldo";
console.log(nameOfFootballer[0]) // ouputs C

//Strings are immutable i.e They cannot be changed once set
// let's try to change the first letter of Cristiano to B
nameOfFootballer[0] = "B";
console.log(nameOfFootballer); 
// still outputs Cristiano Ronaldo instead of Bristiano Ronald

// Getting the last letter of a string
let girlie = "Pamela"
console.log(girlie[girlie.length-1]);

// getting the 4th letter to the last
let guyo = "Yartomizan"
console.log(guyo[guyo.length-4]);
