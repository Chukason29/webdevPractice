"use strict"
const student = {
    name: "Ngozi",
    age: 28,
    class: "JSS 1",
    height: 1.75
}
//converting object to a map
const newMap = new Map(Object.entries(student));

for (const [key, value] of newMap) {
    console.log(`${key} : ${value}`);
}
console.log(newMap);
if(newMap.has("name")){
    console.log(newMap.get("name"));
}