const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const glass = document.querySelector("#calc-glass")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const equalTo = document.querySelector("#equal-to")
let numArray = []
let screenArray = ""
let newScreen = ""
let signCount = 0
function getNumber (){
    numValue = parseInt(this.innerHTML)
    if (signCount == 0) {
        screenArray += numValue
        glass.value = screenArray
    }else{
        newScreen += numValue
        glass.value = newScreen
    }
    
}

function addNum(x, y) {
    signCount = 1
    return x + y
}
function multiplyNum(x, y) {
    signCount = 2
    return x * y
}
function divideNum(x, y) {
    signCount = 3
    return x / y
}
function minusNum(x, y) {
    signCount = 4
    return x - y
}
function operation(){
    let total
    try {
        if (signCount == 1) {
            total =    addNum(parseInt(screenArray), parseInt(newScreen))
        }else if(signCount == 2){
            total =  multiplyNum(parseInt(screenArray), parseInt(newScreen))
        }else if (signCount == 3) {
            total =    divideNum(parseInt(screenArray), parseInt(newScreen))
        }else if(signCount == 4){
            total =  minusNum(parseInt(screenArray), parseInt(newScreen))
        }
    } catch (error) {
        alert(error)
    }
    
    glass.value = total
    signCount = 0
    screenArray = ""
    newScreen = ""
}


one.addEventListener('click', getNumber)
two.addEventListener('click', getNumber)
three.addEventListener('click', getNumber)
four.addEventListener('click', getNumber)
five.addEventListener('click', getNumber)
six.addEventListener('click', getNumber)
seven.addEventListener('click', getNumber)
eight.addEventListener('click', getNumber)
nine.addEventListener('click', getNumber)
zero.addEventListener('click', getNumber)
plus.addEventListener('click', addNum)
minus.addEventListener('click', minusNum)
multiply.addEventListener('click', multiplyNum)
divide.addEventListener('click', divideNum)
equalTo.addEventListener('click', operation)
