// script.js
let currentInput = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }

    if (value === '.' && currentInput.includes('.')) return; // Prevent multiple dots

    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').textContent = '';
}

function calculate() {
    const display = document.getElementById('display');
    
    try {
        currentInput = eval(currentInput).toString();
        resultDisplayed = true;
    } catch (error) {
        currentInput = 'Error';
    }

    display.textContent = currentInput;
}
