/*
    javaScript math is used to perform mathematical operations
*/
//console.log(Math.floor(Math.random()));

//return a value from 0 to 9

//getting a random value in JS


// This function is when you want the min included while max excluded
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max -min)) + min;
}


// This function is when you want the min and max value included

function getRandomValueMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
//console.log(getRandomValueMax(1,6));

//small ludo game
switch (getRandomValueMax(1,6)) {
    case 6:
        console.log("play")
        break;
    default:
        console.log("count");
        break;
}
let diceNum = Math.floor(Math.random() * (max - min + 1)) + min;
log