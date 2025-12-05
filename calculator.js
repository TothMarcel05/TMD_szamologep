let display = document.getElementById("display");
let currentInput = "1";

function updateDisplay(){
    display.textContent = currentInput;
}
function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function clearDisplay(){
    currentInput = "0";
    updateDisplay();
}
