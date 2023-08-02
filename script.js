
function press(num){
    if (pressed == true){
        display.innerText = num
        pressed = false
    }
    else if( display.innerText != 0 ){
        display.innerText += num
    }
    else{
        display.innerText = num
    }
}

var num1 = null
var operator = null

function setOP(OP){
    num1 = parseFloat(display.innerText)
    operator = OP
    display.innerText = null
    console.log(num1)
}

pressed = false

function calculate(){
    num2 = parseFloat(display.innerText)
    display.innerText = operation(num1, num2, operator)
    pressed = true
}

function operation(num1, num2, operator){
    if (operator == "/"){
        return num1 / num2
    }
    if (operator == "*"){
        return num1 * num2
    }
    if (operator == "-"){
        return num1 - num2
    }
    if (operator == "+"){
        return num1 + num2
    }
}

function clr(){
    display.innerText = 0
    num1 = null
    operator = null
}