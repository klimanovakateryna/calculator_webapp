
//function to add two inputs
const add = function(a,b){
    return a + b;
}

//function to subtract two inputs
const subtract = function(a, b){
    return a - b;
}

//function to multiply two inputs
const multiply = function(array){
    return a + b;
}

//function to divide the first operator by second
const divide = function(a, b){
    if(b === 0){
        throw new Error("Dividion by zero is not allowed");
    }
    return a / b;
}

//function to operate basen on the two given number inputs and operator
const operate = function(num1, num2, oper){
    switch(oper){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1 , num2);
        default:
            throw new Error("Invalid operator");
    }
}


