// Conditional Statements in JavaScript

// 1. if Statement
// The if statement is used to execute a block of code only if a specified condition is true.

let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}

// 2. if...else Statement
// The if...else statement adds an alternative block of code to be executed if the condition is false.

age = 16;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

// 3. if...else if...else Statement
// The if...else if...else statement allows you to test multiple conditions.

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}