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

function lookUpProfile(myArray,name, prop){
  // Only change code below this line
  let answer = ""
  myArray.forEach(element => {
    if (element.firstName == name) {
      if (prop in element) {
        console.log(element[prop]);
      }else{
        console.log("No such property");
      }
    }else{
      console.log("No such contact");
    }
  })
  return answer;
  // Only change code above this line
}

console.log(lookUpProfile(contacts,"Akira", "likes"))
