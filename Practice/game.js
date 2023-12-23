const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const text = document.querySelector("#text")
let gold = 50
let health = 5
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

const buyGold = () => {
    
}
const buyHealth = () => {
    if(gold >=10){
        gold -= 10
        health += 1
        healthText.innerText = health
        goldText.innerText = gold
    }else{
        text.innerText = "You dont have enough money to buy"
    } 
}
const goHome = () => {
    leaveHome(locations[2])
}
const gotoStore = () =>{
    leaveHome(locations[0])
}
const gotoCave = () =>{
    leaveHome(locations[1])
}
const fightSlime = () => {
    console.log("fight slime");
}
const fightBeast = () => {
    console.log("fight beast");
}
const fightDragon = () =>{
    console.log ("fight dragon")
}
const locations = [
    {
        name: "store",
        buttonText: ["buy 10 gold", "buy 10 health", "return Home"],
        buttonFunction: [buyGold, buyHealth, goHome],
        texty: "buy everything here"
    },
    {
        name: "cave",
        buttonText: ["fight slime", "fight beast", "return Home"],
        buttonFunction: [fightSlime, fightBeast, goHome],
        texty: "be brave to fight"
    },
    {
        name: "home",
        buttonText: ["Go to store", "Go to cave", "Fight Dragon"],
        buttonFunction: [gotoStore, gotoCave, fightDragon],
        texty: "Welcome Back"
    }
]

function leaveHome(location){
    button1.innerText = location.buttonText[0]
    button2.innerText = location.buttonText[1]
    button3.innerText = location.buttonText[2]
    button1.onclick = location.buttonFunction[0]
    button2.onclick = location.buttonFunction[1]
    button3.onclick = location.buttonFunction[2]
    text.innerText = location.texty
}

button1.onclick = gotoStore

