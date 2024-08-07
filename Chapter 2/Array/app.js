// Arrays in JavaScript

// Arrays are used to store multiple values in a single variable. They are a special type of object.

// Creating Arrays
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = ["Hello", 42, true, null];

// Accessing Array Elements
console.log(fruits[0]); // "Apple"
console.log(numbers[2]); // 3

// Array Properties and Methods

// 1. length
// Returns the number of elements in the array.
console.log(fruits.length); // 3

// 2. push()
// Adds one or more elements to the end of an array and returns the new length.
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Orange"]

// 3. pop()
// Removes the last element from an array and returns that element.
let lastFruit = fruits.pop();
console.log(lastFruit); // "Orange"
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// 4. shift()
// Removes the first element from an array and returns that element.
let firstFruit = fruits.shift();
console.log(firstFruit); // "Apple"
console.log(fruits); // ["Banana", "Cherry"]

// 5. unshift()
// Adds one or more elements to the beginning of an array and returns the new length.
fruits.unshift("Strawberry");
console.log(fruits); // ["Strawberry", "Banana", "Cherry"]

// 6. concat()
// Merges two or more arrays and returns a new array.
let moreFruits = ["Mango", "Pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Strawberry", "Banana", "Cherry", "Mango", "Pineapple"]

// 7. slice()
// Returns a shallow copy of a portion of an array into a new array object.
let someFruits = allFruits.slice(1, 3);
console.log(someFruits); // ["Banana", "Cherry"]

// 8. splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
allFruits.splice(2, 1, "Kiwi", "Grapes"); // Removes 1 element at index 2 and adds "Kiwi" and "Grapes"
console.log(allFruits); // ["Strawberry", "Banana", "Kiwi", "Grapes", "Mango", "Pineapple"]

// 9. indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = allFruits.indexOf("Mango");
console.log(index); // 4

// 10. includes()
// Determines whether an array includes a certain element, returning true or false.
let hasBanana = allFruits.includes("Banana");
console.log(hasBanana); // true

// 11. join()
// Joins all elements of an array into a string and returns this string.
let fruitString = allFruits.join(", ");
console.log(fruitString); // "Strawberry, Banana, Kiwi, Grapes, Mango, Pineapple"

// 12. reverse()
// Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
allFruits.reverse();
console.log(allFruits); // ["Pineapple", "Mango", "Grapes", "Kiwi", "Banana", "Strawberry"]

// 13. sort()
// Sorts the elements of an array in place and returns the array.
allFruits.sort();
console.log(allFruits); // ["Banana", "Grapes", "Kiwi", "Mango", "Pineapple", "Strawberry"]

// 14. forEach()
// Executes a provided function once for each array element.
allFruits.forEach(fruit => console.log(fruit));
// Output:
// Banana
// Grapes
// Kiwi
// Mango
// Pineapple
// Strawberry

// 15. map()
// Creates a new array with the results of calling a provided function on every element in the calling array.
let fruitLengths = allFruits.map(fruit => fruit.length);
console.log(fruitLengths); // [6, 6, 4, 5, 9, 10]

// 16. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let longFruits = allFruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ["Banana", "Grapes", "Pineapple", "Strawberry"]

// 17. reduce()
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let totalLength = allFruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // 40

// 18. find()
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
let foundFruit = allFruits.find(fruit => fruit.startsWith("P"));
console.log(foundFruit); // "Pineapple"

// 19. findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
let foundIndex = allFruits.findIndex(fruit => fruit.startsWith("P"));
console.log(foundIndex); // 4

// 20. some()
// Tests whether at least one element in the array passes the test implemented by the provided function.
let hasLongFruit = allFruits.some(fruit => fruit.length > 10);
console.log(hasLongFruit); // true

// 21. every()
// Tests whether all elements in the array pass the test implemented by the provided function.
let allLongFruits = allFruits.every(fruit => fruit.length > 3);
console.log(allLongFruits); // true
