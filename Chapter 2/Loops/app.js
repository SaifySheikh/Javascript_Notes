// Loops in JavaScript

// 1. for Loop
// The for loop repeats a block of code a specified number of times.

for (let i = 0; i < 5; i++) {
    console.log(`for loop iteration: ${i}`);
}
// Output:
// for loop iteration: 0
// for loop iteration: 1
// for loop iteration: 2
// for loop iteration: 3
// for loop iteration: 4

// 2. while Loop
// The while loop repeats a block of code as long as a specified condition is true.

let j = 0;
while (j < 5) {
    console.log(`while loop iteration: ${j}`);
    j++;
}
// Output:
// while loop iteration: 0
// while loop iteration: 1
// while loop iteration: 2
// while loop iteration: 3
// while loop iteration: 4

// 3. do...while Loop
// The do...while loop repeats a block of code once, and then continues to repeat it as long as a specified condition is true.

let k = 0;
do {
    console.log(`do...while loop iteration: ${k}`);
    k++;
} while (k < 5);
// Output:
// do...while loop iteration: 0
// do...while loop iteration: 1
// do...while loop iteration: 2
// do...while loop iteration: 3
// do...while loop iteration: 4

// 4. for...in Loop
// The for...in loop iterates over the properties of an object.

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Output:
// name: John
// age: 30
// city: New York

// 5. for...of Loop
// The for...of loop iterates over iterable objects (like arrays, strings, etc.).

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(`for...of loop color: ${color}`);
}
// Output:
// for...of loop color: red
// for...of loop color: green
// for...of loop color: blue

// 6. break Statement
// The break statement exits a loop immediately when it is encountered.

for (let m = 0; m < 10; m++) {
    if (m === 5) {
        break; // Exit the loop when m is 5
    }
    console.log(`break example iteration: ${m}`);
}
// Output:
// break example iteration: 0
// break example iteration: 1
// break example iteration: 2
// break example iteration: 3
// break example iteration: 4

// 7. continue Statement
// The continue statement skips the current iteration of the loop and proceeds with the next iteration.

for (let n = 0; n < 10; n++) {
    if (n === 5) {
        continue; // Skip the iteration when n is 5
    }
    console.log(`continue example iteration: ${n}`);
}
// Output:
// continue example iteration: 0
// continue example iteration: 1
// continue example iteration: 2
// continue example iteration: 3
// continue example iteration: 4
// continue example iteration: 6
// continue example iteration: 7
// continue example iteration: 8
// continue example iteration: 9
