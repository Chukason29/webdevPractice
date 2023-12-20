let splittedArray = []
const chunkArrayInGroup = (arr, size) =>{
  if(arr.length < 1){
    return splittedArray
  }
  splittedArray.push(arr.splice(0, size))
  return chunkArrayInGroup(arr, size)
}

/////////////////////////   OR    ///////////////////////////////////
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    var stop = size;
    for(var i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, stop));
      stop += size;
    }
    return newArr;
}

console.log(chunkArrayInGroup([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
