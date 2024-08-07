// Timers in JavaScript: setInterval, setTimeout, and clearInterval

// 1. setTimeout
// The setTimeout() function is used to execute a function or a block of code after a specified delay (in milliseconds).
// Syntax: setTimeout(callback, delay, [arg1, arg2, ...])
// - callback: The function to be executed after the delay.
// - delay: The time in milliseconds to wait before executing the callback.
// - [arg1, arg2, ...]: Optional arguments to pass to the callback function.

console.log("setTimeout Example:");
setTimeout(() => {
    console.log("This message is shown after 2 seconds.");
}, 2000); // Executes the callback function after 2000 milliseconds (2 seconds)

// 2. setInterval
// The setInterval() function is used to repeatedly execute a function or block of code at specified intervals (in milliseconds).
// Syntax: setInterval(callback, interval, [arg1, arg2, ...])
// - callback: The function to be executed repeatedly.
// - interval: The time in milliseconds between each execution.
// - [arg1, arg2, ...]: Optional arguments to pass to the callback function.

console.log("setInterval Example:");
const intervalId = setInterval(() => {
    console.log("This message is shown every 1 second.");
}, 1000); // Executes the callback function every 1000 milliseconds (1 second)

// 3. clearInterval
// The clearInterval() function is used to stop the execution of a function that was set up using setInterval().
// Syntax: clearInterval(intervalId)
// - intervalId: The identifier of the interval to be cleared, returned by setInterval().

setTimeout(() => {
    clearInterval(intervalId); // Stops the interval after 5 seconds
    console.log("Interval cleared. No more messages.");
}, 5000); // Executes the clearInterval function after 5000 milliseconds (5 seconds)

// Summary
// - setTimeout() is used for single delayed execution of code.
// - setInterval() is used for repeated execution of code at fixed intervals.
// - clearInterval() is used to stop the repeated execution set by setInterval().

// Examples show how to use setTimeout to delay code execution, setInterval to repeat code execution, and clearInterval to stop repeated executions.
