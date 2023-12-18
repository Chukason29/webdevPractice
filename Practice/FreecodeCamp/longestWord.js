function findLongestWordLength(str) {
    const wordArray = str.split(" ");
    const newWordArray = wordArray.map(item => {
        return item.length
    })
    return Math.max(...newWordArray);
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));