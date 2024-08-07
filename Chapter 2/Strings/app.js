// In JavaScript, a string is a sequence of characters used to represent text. Strings are one of the primitive data types and are immutable, meaning once a string is created, its value cannot be changed. Instead, any manipulation of a string results in the creation of a new string.


// Creating Strings
// Strings can be created using single quotes ('), double quotes ("), or backticks (`) for template literals.

let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;


// String Methods
// JavaScript provides a variety of methods for manipulating and interacting with strings. Here are some commonly used string methods:


// 1. length
// Returns the length of the string.

let str = "Hello, World!";
console.log(str.length); // 13


// 2. charAt()
// Returns the character at the specified index.

console.log(str.charAt(0)); // 'H'
console.log(str.charAt(7)); // 'W'


// 3. charCodeAt()
// Returns the Unicode of the character at the specified index.

console.log(str.charCodeAt(0)); // 72


// 4. concat()
// Joins two or more strings and returns a new string.

let str1 = "Hello";
let str2 = "World";
let result = str1.concat(", ", str2, "!");
console.log(result); // "Hello, World!"


// 5. includes()
// Checks if a string contains another string, returning true or false.

console.log(str.includes("World")); // true
console.log(str.includes("world")); // false (case-sensitive)


// 6. indexOf()
// Returns the index of the first occurrence of a specified value in a string. If not found, it returns -1.

console.log(str.indexOf("World")); // 7
console.log(str.indexOf("world")); // -1


// 7. lastIndexOf()
// Returns the index of the last occurrence of a specified value in a string.

let str3 = "Hello, World! Hello!";
console.log(str3.lastIndexOf("Hello")); // 14


// 8. slice()
// Extracts a part of a string and returns a new string.

console.log(str.slice(7, 12)); // "World"


// 9. substring()
// Similar to slice(), but does not accept negative indices.

console.log(str.substring(7, 12)); // "World"


// 10. substr()
// Extracts a part of a string, beginning at a specified position, and returns a specified number of characters.

console.log(str.substr(7, 5)); // "World"


// 11. toLowerCase()
// Converts a string to lowercase letters.

console.log(str.toLowerCase()); // "hello, world!"


// 12. toUpperCase()
// Converts a string to uppercase letters.

console.log(str.toUpperCase()); // "HELLO, WORLD!"


// 13. trim()
// Removes whitespace from both ends of a string.

let str4 = "   Hello, World!   ";
console.log(str4.trim()); // "Hello, World!"


// 14. split()
// Splits a string into an array of substrings.

let str5 = "Hello, World!";
let arr = str5.split(", ");
console.log(arr); // ["Hello", "World!"]


// 15. replace()
// Replaces a specified value with another value in a string.

console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"


// 16. repeat()
// Returns a new string with a specified number of copies of the original string.

let str6 = "Hello!";
console.log(str6.repeat(3)); // "Hello!Hello!Hello!"


// Template Literals
// Template literals provide a more powerful way to create strings. They allow for embedded expressions, multi-line strings, and string interpolation.

let name = "John";
let greeting = `Hello, ${name}! How are you?`;
console.log(greeting); // "Hello, John! How are you?"

let multiLineString = `This is
a multi-line
string.`;
console.log(multiLineString);


// Summary
// Strings in JavaScript are versatile and come with a rich set of methods for manipulation and inspection. Understanding and utilizing these methods allows for efficient and effective string handling in JavaScript programming.
