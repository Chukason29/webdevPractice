// The for in loop is used to loop through the properties of an object

car = {
    name: "Audi",
    model: "Au192",
    color: "White",
    price: 10000,
    reach : {
        York: 13000,
        Lisbon : 2000,
        berlin : 3000
    }
}
for (const key in car){ 
    console.log(
        key + ': ' + car[key] 
        // key is used to get the property, car[key] is used to get the value
    );
}
  
for(item in car){
    if (Object.prototype.toString.call(car[item]) === '[object Object]') {
        console.log(item + ": {");
        for (x in car[item]){
            console.log(
                '\t' + x + ': ' + car[item][x]
            );
        }
        console.log("}")
    } else {
        console.log(item + ': ' + car[item]);
    }
}
  
  
  
  