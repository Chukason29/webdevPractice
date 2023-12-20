/*
    Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/


function getIndexToIns(arr, num) {
    const sorted = arr.sort((a, b) => a - b)
    let arrIndex = 0
    for(let i = 0; i < sorted.length; i++){
      if(sorted[i] == num){
        arrIndex = i
        break
      }else if(num > sorted[i] && sorted[i + 1] > num){
        arrIndex = i+1
        break
      }else{
        arrIndex = sorted.length
      }
    }
    return arrIndex
  }
  
  console.log(getIndexToIns([2, 5, 10], 15));