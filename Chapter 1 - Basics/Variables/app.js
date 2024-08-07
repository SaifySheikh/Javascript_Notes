//Here are the conventions for writing variable Name in Js

// 1. Name should Not start from Number
// 2. Name should not be Keyword
// 3. Name SHould not contain space
// 4. U can use _ but Not -

// 1. var
// Scope: var is function-scoped, meaning it is only accessible within the function where it is declared. If declared outside any function, it becomes a global variable.
// Hoisting: Variables declared with var are hoisted to the top of their scope. However, the initialization stays in place, so they are initialized with undefined.
// Re-declaration: You can re-declare a variable using var within the same scope without errors.

function example() {
    console.log(a); // undefined (hoisted)
    var a = 10;
    console.log(a); // 10
    var a=20;
    console.log(a); //Re-Declare
}
example();

// 2. let
// Scope: let is block-scoped, meaning it is only accessible within the block (denoted by curly braces {}) where it is declared.
// Hoisting: Variables declared with let are hoisted to the top of their block, but they are not initialized. Accessing them before declaration results in a ReferenceError.
// Re-declaration: You cannot re-declare a variable using let within the same scope.

console.log(`LET`);

function example() {
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 20;
    console.log(b); // 20
    b=2;
    console.log(b); // 20
}

let b=10; // redeclared in other block
console.log(b);

example();


// 3. const
// Scope: const is block-scoped, similar to let.
// Hoisting: Variables declared with const are hoisted to the top of their block, but they are not initialized. Accessing them before declaration results in a ReferenceError.
// Re-declaration: You cannot re-declare a variable using const within the same scope.
// Assignment: const is used to declare variables that are meant to be constant and immutable. Once a const variable is assigned a value, it cannot be reassigned. However, if the value is an object or array, its properties or elements can be modified.
console.clear();
console.log(`Const`);

function example() {
    // console.log(c); // ReferenceError: Cannot access 'c' before initialization
    const c = 30;
    console.log(c); // 30

    // c = 40; // TypeError: Assignment to constant variable.

    const obj = { key: 'value' };
    obj.key = 'new value'; // This is allowed
    console.log(obj.key); // 'new value'
}

const c=20;
console.log(c);
example();
