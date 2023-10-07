// for of loop is used to loop iterable objects like Strings, Arrays, NodeLists, Maps

// A typical javaScript object isn't an iterable, hence for-of loop can't iterate over it
// for of loop and .forEach loop are the two main loopf for iterating a nodeList
nums = [1,2,3,4,5,6]

for (const n of nums) {
    console.log(n);
}
let firstName = "Tommyzan";
for (const letter of firstName) {
    console.log(firstName.indexOf(letter) + ": " + letter);
}