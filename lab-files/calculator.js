// Calculator program in JavaScript

// Function for addition
function add(num1, num2) {
    return num1 + num2;
}

// Function for multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Function for subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Function for division
function divide(num1, num2) {
    if(num2 != 0) {
        return num1 / num2;
    } else {
        return "Error: Division by zero is not allowed";
    }
}

// Function to take user input
function takeInput() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));
    let operation = prompt("Enter operation (add, subtract, multiply, divide):");

    return {num1, num2, operation};
}

// Function to provide output
function provideOutput(input) {
    let result;

    if (input.operation === 'add') {
        result = add(input.num1, input.num2);
    } else if (input.operation === 'subtract') {
        result = subtract(input.num1, input.num2);
    } else if (input.operation === 'multiply') {
        result = multiply(input.num1, input.num2);
    } else if (input.operation === 'divide') {
        result = divide(input.num1, input.num2);
    } else {
        result = "Error: Invalid operation";
    }

    alert(`The result is: ${result}`);
}

// Main program
function main() {
    let input = takeInput();
    provideOutput(input);
}

main();