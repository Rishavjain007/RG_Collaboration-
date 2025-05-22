// JS code goes here

// Calculator logic for calculator.html

let display = "";

function appendToDisplay(value) {
    display += value;
    document.getElementById("display").value = display;
}

function clearDisplay() {
    display = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let result = eval(display);
        document.getElementById("display").value = result;
        display = result.toString();
    } catch (e) {
        document.getElementById("display").value = "Error";
        display = "";
    }
}

function erase(){
    document.getElementById("result").value = "";
}

function add(a,b){
    return a + b;
}

function subtract(a,b){ 
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b === 0){
        return "Error: Division by zero";
    }
}

