//converting object to a map
const newMap = new Map(Object.entries(student));

for (const [key, value] of newMap) {
    console.log(`${key} : ${value}`);
}