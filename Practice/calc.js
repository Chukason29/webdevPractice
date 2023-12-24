const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const glass = document.querySelector("#calc-glass")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
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
function signIncrement (){
    signCount
}
function addNum(x, y) {
    signCount++
    return x + y
}
function minusNum(x, y) {
    signCount--
    return x - y
}
function operation(){
    let total
    if (signCount > 0) {
      total =    addNum(parseInt(screenArray), parseInt(newScreen))
    }else{
        total =  minusNum(parseInt(screenArray), parseInt(newScreen))
    }
    glass.value = total
    signCount = 0
    screenArray = ""
    newScreen = ""
}


one.addEventListener('click', getNumber)
two.addEventListener('click', getNumber)
three.addEventListener('click', getNumber)
plus.addEventListener('click', addNum)
minus.addEventListener('click', minusNum)
equalTo.addEventListener('click', operation)
