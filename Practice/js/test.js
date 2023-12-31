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

// Checking for vote eligibility
function voterEligibility(age) {
    if (age >= 18) {
        return 1;
    }else{
        return 0;
    }
}
document.querySelector("#check").addEventListener("click", function(){
    //get the value for voter input
    let voter = document.querySelector("#voter").value;
    let voterAnswer = document.querySelector(".voter-answer");
    if (voterEligibility(voter)) {
        voterAnswer.style.color = "green";
        voterAnswer.innerHTML = "You are eligible";
    }else{
        voterAnswer.style.color = "red";
        voterAnswer.innerHTML = "You are not eligible";
    }
    
})
//displaying products using objects and maps

class Products {
    constructor(name, price, color){
        this.name = name;
        this.color = color;
        this.price = price
    }
}

const firstCar = new Products("Audi X07", 12000, "White");
const secondCar = new Products("Mazda737", 6000, "Green");
const thirdCar = new Products("Innoson", 9000, "black");

const myCars = [firstCar, secondCar, thirdCar];

function displayingProducts(carArray) {
    let allProducts = "";
    let result = document.querySelector(".products");
    for (const i in carArray) {
        allProducts += `<div><h4>${carArray[i].name}</h4><p>${carArray[i].color}</p><p>${carArray[i].price}</p></div>`;
    }
    return  result.innerHTML = allProducts;
}
displayingProducts(myCars);

function filterPrice(price, productArray) {
    filteredProducts = productArray.filter( product => product.price > price )
    return filteredProducts;
}

document.querySelector(".filter-price").addEventListener("click",  () => displayingProducts(filterPrice(6000, myCars)));


// doing a small menu

//creating an object constructor
function Players (playerNum, name, position, shirtNum){
    this.playerNum = playerNum;
    this.name = name;
    this.position = position;
    this.shirtNum = shirtNum;
    this.objectList = function(){
        let myPlayers = ""
        for(item in this){
            if (typeof this[item] !="string") {
                continue;
            }else{
                myPlayers += `\t<li>${this[item]}</li>\n`
            }
        }
        return `<ul>\n${myPlayers}</ul>`;
    }
}
const player1 = new Players("001", "Maguire", "Defender", "5");
const player2 = new Players("002", "Martinez", "Defender", "6");
const player3 = new Players("003", "Rasford", "Forward", "10");

const playerMap = new Map();

playerMap.set(player1.playerNum, player1);
playerMap.set(player2.playerNum, player2);
playerMap.set(player3.playerNum, player3);

console.log(playerMap);

let allPlayers = "";
parent = document.querySelector(".players");
playerMap.forEach((value, key) =>{
    allPlayers += `\n<li>${key} ${value.objectList()}</li>\n`
})
parent.innerHTML = allPlayers;
