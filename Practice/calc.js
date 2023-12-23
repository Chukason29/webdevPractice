const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const glass = document.querySelector("#calc-glass")
const plus = document.querySelector("#plus")
let screenArray = ''
function getNumber (){
    numValue = parseInt(this.innerHTML)  
    screenArray += numValue
    glass.value = screenArray
}
function addNum( ) {
    
}


one.addEventListener('click', getNumber)
two.addEventListener('click', getNumber)
three.addEventListener('click', getNumber)

