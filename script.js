let firstNumber= '';
let secondNumber = '';
let operator;
let currentNumber = '';
let conclusion;

let isOperatorPressed = false;

const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".digit-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector("#equals");
const reset = document.querySelector('#clear');

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
}

const percentage = function(a, b) {
    return (a * (b / 100));
}


const operate = function (num1, num2, oper) {
    switch (oper) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            try {
                return divide(num1, num2);
            } catch (error) {
                return "Invalid operation";
            }
        case '%':
            return percenage(num1, num2);
        default:
            throw new Error("Invalid operator");
    }
}

//connect the number buttons
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', handleNumbers);
});

function handleNumbers(event) {
    let val1 = event.target.textContent;
    currentNumber += val1;

    if (isOperatorPressed) {
        secondNumber = currentNumber;
    } else {
        firstNumber = currentNumber;
    }

    //if an operator is clicked again, reset the conclusion to the first number and perform a calculation again

    console.log("First number: " + firstNumber);
    console.log("Second number: " + secondNumber);
    console.log("Current number: " + currentNumber);
    displayNumber(currentNumber);
    
}

//connect the operator buttons
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", handleOperators);
}
)

function handleOperators(event) {
    if (currentNumber !== '') {
        if (firstNumber !== '' && operator !== '' && secondNumber !== ''){
            conclusion = operate(Number(firstNumber), Number(secondNumber), operator);
            displayNumber(conclusion.toString());
            firstNumber = conclusion.toString(); 
            secondNumber = '';
        }
        let op = event.target.textContent;


        display.textContent = op;
        operator = op;
        currentNumber = '';
        isOperatorPressed = true;
        console.log("Operator clicked: " + operator, );
    }
}

equalButton.addEventListener("click", () => {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        conclusion = operate(Number(firstNumber), Number(secondNumber), operator);
        displayNumber(conclusion.toString());
        isOperatorPressed = false;
        firstNumber = conclusion.toString();  
        secondNumber = '';
        operator = '';
        console.log("First number: " + firstNumber);
    }
});


reset.addEventListener("click", () => {
    if(firstNumber !== ''){
        resetDisplay();
    }
} )

function displayNumber(value) {
    display.textContent = value;
}

function resetDisplay() {
    firstNumber = '';
    secondNumber = '';
    currentNumber = '';
    operator = '';
    isOperatorPressed = false;
    displayNumber('0');
}
