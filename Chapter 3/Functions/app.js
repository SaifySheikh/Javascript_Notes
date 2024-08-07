// Functions in JavaScript

// 1. Function Declaration
// Function declarations are hoisted, meaning they can be called before they are defined.
function greet() {
    console.log("Hello, world!");
}
greet(); // "Hello, world!"

// 2. Function Expression
// Function expressions are not hoisted, meaning they cannot be called before they are defined.
const sayHello = function() {
    console.log("Hello!");
};
sayHello(); // "Hello!"

// 3. Arrow Functions
// Arrow functions are a concise syntax for writing function expressions. They do not have their own 'this' context.
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Arrow function with block body
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 3)); // 6

// 4. Immediately Invoked Function Expressions (IIFE)
// Functions that are executed immediately after they are defined.
(function() {
    console.log("IIFE executed!");
})(); // "IIFE executed!"

// IIFE with arrow function
(() => {
    console.log("Arrow IIFE executed!");
})(); // "Arrow IIFE executed!"

// 5. Functions with Parameters and Arguments
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7)); // 12

// Default Parameters
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetUser(); // "Hello, Guest!"
greetUser("Alice"); // "Hello, Alice!"

// Rest Parameters
function logNumbers(...numbers) {
    console.log(numbers);
}
logNumbers(1, 2, 3, 4); // [1, 2, 3, 4]

// 6. Function Returning Functions
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // 10

// 7. Methods (Functions as Object Properties)
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log(calculator.add(10, 5)); // 15
console.log(calculator.subtract(10, 5)); // 5

// Shorthand Method Definition
const person = {
    name: 'John',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet(); // "Hello, my name is John"

// 8. Callback Functions
// Functions that are passed as arguments to other functions and are called inside the outer function.
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}
fetchData((message) => {
    console.log(message); // "Data fetched" (after 1 second)
});

// 9. Higher-Order Functions
// Functions that take other functions as arguments or return functions as their result.
function applyOperation(a, b, operation) {
    return operation(a, b);
}
const result = applyOperation(10, 5, (x, y) => x - y);
console.log(result); // 5

// 10. Closures
// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

// 11. Recursion
// A function that calls itself.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Summary
// Functions in JavaScript are fundamental building blocks and come in various forms such as function declarations, expressions, arrow functions, and more. Understanding functions, including concepts like closures, callbacks, and higher-order functions, is crucial for effective programming in JavaScript.
