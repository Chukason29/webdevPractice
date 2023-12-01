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
    let innerProduct = 1
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      for (let k = 0; k < arr.length; k++) {
        
      }
    }
    // Only change code above this line
    return product;
  }
  
 multiplyAll= [[1, 2], [3, 4], [5, 6, 7]];
 console.log(multiplyAll[2][2]);