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
        if (element === " ") {
            continue;
        }
        splittedString += '<a>' + element +'</a>';
    }
    return splittedString;
}

function placeResult() {
    try {
        result.innerHTML = splitString(inputText);
        let a = document.getElementsByTagName('a');
        for (const element of a) {
            element.setAttribute('class', colorMap.get(getRandomValueMax(1,6)));
        }
    } catch (error) {
        
    }
}
let hello ="";
hello = function() {
    document.getElementById('pdemo').innerHTML += getRandomValueMax(1, 9);
}
document.getElementById('pdemo').addEventListener('load', hello);

document.getElementById('btn').addEventListener('click', hello);

function getRandomValueMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}