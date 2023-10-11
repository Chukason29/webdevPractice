const result = document.getElementById("demo");
const inputText = "Chukwuebuka Alaegbu";
const colorMap = new Map([
    [1, 'red'],
    [2, 'green'],
    [3, 'blue'],
    [4, 'yellow'],
    [5, 'purple'],
    [6, 'orange']
]);
function getRandomValueMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function splitString(text){
    let splittedString = "";
    for (const element of text) {
        splittedString += '<p>' + element +'</p>';
    }
    return splittedString;
}

function placeResult() {
    try {
        result.innerHTML =  splitString(inputText);
    } catch (error) {
        console.log(error.message);
    }
}
document.getElementsByTagName('p').classList.add('.red');
