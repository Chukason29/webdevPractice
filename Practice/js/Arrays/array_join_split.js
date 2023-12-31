// The array join is the opposite of array split

/*
    While the .split() splits a given string to an array, the .join() combines all item
    in an array into a single string 
*/

const nameString = "Chukwuebuka is a boy";
console.log(nameString.split(' '));// This splits the string whereever it finds a space

const arrayString = ["orange", "apple", "Guava", "Water Melon"]

console.log(arrayString.join(""));