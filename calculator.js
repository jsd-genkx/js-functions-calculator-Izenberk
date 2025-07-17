"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        return 'Cannot divide by zero.';
    }

    return num1 / num2;
}
// Step 02: Create a Validation Function for Inputs
function validateInput(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Both inputs must be numbers.';
    }
}
// Step 03: Create a Calculator Function to Combine the Above Functions

/**
 * Performs a math operation on two numbers.
 *
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {'add' | 'subtract' | 'multiply' | 'divide'} [operation] - The operation to perform.
 * @returns {number|error log} - The result or null if input is invalid.
 *
 * 💡 Valid operations: 'add', 'subtract', 'multiply', 'divide'
 */
function calculator(num1, num2, operation) {
    const operations = ['add', 'subtract', 'multiply', 'divide'];

    if (!operations.includes(operation)) {
        return `"${operation}" is invalid operation.`;
    }

    switch (operation) {
        case 'add':
            return addition(num1, num2);
        case 'subtract':
            return subtraction(num1, num2);
        case 'multiply':
            return multiplication(num1, num2);
        case 'divide':
            return division(num1, num2);
    }

}

console.log(calculator(10, 5, "add")); // returns 15
console.log(calculator(10, 5, "divide")); // returns 2
console.log(calculator(10, 0, "divide")); // returns 'Cannot divide by zero'
console.log(calculator(10, 5, "unknown")); // returns 'Invalid operation. 