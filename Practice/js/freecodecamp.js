// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  //console.log(recordCollection["1245"]["tracks"].push("Ngozi"));
  //console.log(recordCollection);
  
  function updateRecords(records, id, prop, value) {
    if (value.length == 0) {
        delete records[id][prop];
    }else if (prop != "tracks" && value.length > 0){
        records[id][prop] = value;
    }
    if (prop == "tracks" && value.length > 0){
        if(prop in records[id]){
            records[id][prop].push(value)
        }else{
            records[id][prop] = [];
            records[id][prop].push(value);
         } 
    }
    return records;
  }
  //console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

  function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      for(let k = 0; k < arr[i].length; k++){
        product *= arr[i][k];
      }
    }
    return product;
  }

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));


// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  }
];

function lookUpProfile(name, prop){
  // Only change code below this line
  let answer = ""
  for(const element of contacts) {
    if (element.firstName == name) {
      if (prop in element) {
        answer = element[prop];
        break
      }else{
        answer = "No such property";
        break;
      }
    }else{
      answer = "No such contact"
    }
  }
  return answer;
  // Only change code above this line
}

//console.log(lookUpProfile("Sherlock", "likes"))


// Only change code below this line
class Thermostat{
  constructor(temperature){
    this._temperature = temperature
  }
  get temperature(){
    let celcius = 5/9 * (this._temperature - 32)
    return celcius
  }
  set temperature(temp){
    this._temperature = temp
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);