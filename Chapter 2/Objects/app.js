// Objects in JavaScript

// Objects are collections of properties, where each property is a key-value pair. 
// The keys are strings (or Symbols) and the values can be of any type, including other objects.

// Creating an Object
let person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

// Accessing Object Properties
console.log(person.name); // "John"
console.log(person['age']); // 30

// Adding and Modifying Properties
person.job = "Engineer";
person.age = 31;
console.log(person); // {name: "John", age: 31, city: "New York", greet: [Function: greet], job: "Engineer"}

// Deleting Properties
delete person.city;
console.log(person); // {name: "John", age: 31, greet: [Function: greet], job: "Engineer"}

// Methods of Object
person.greet(); // "Hello, John"

// Common Object Methods

// 1. Object.keys()
// Returns an array of a given object's property names.
let keys = Object.keys(person);
console.log(keys); // ["name", "age", "greet", "job"]

// 2. Object.values()
// Returns an array of a given object's property values.
let values = Object.values(person);
console.log(values); // ["John", 31, [Function: greet], "Engineer"]

// 3. Object.entries()
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 31], ["greet", [Function: greet]], ["job", "Engineer"]]

// 4. Object.assign()
// Copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
let target = {};
let source = { a: 1, b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }

// 5. Object.freeze()
// Freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.
let obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // This will have no effect
console.log(obj.prop); // 42

// 6. Object.seal()
// Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
let sealedObj = { prop: 42 };
Object.seal(sealedObj);
sealedObj.prop = 33; // This will work
delete sealedObj.prop; // This will not work
console.log(sealedObj.prop); // 33

// 7. Object.getPrototypeOf()
// Returns the prototype (i.e., the internal [[Prototype]] property) of the specified object.
let proto = Object.getPrototypeOf(person);
console.log(proto); // Outputs the prototype object

// 8. Object.setPrototypeOf()
// Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
let anotherObj = {};
Object.setPrototypeOf(anotherObj, person);
console.log(Object.getPrototypeOf(anotherObj)); // Outputs the person object

// 9. Object.create()
// Creates a new object, using an existing object as the prototype of the newly created object.
let newObj = Object.create(person);
console.log(newObj.name); // "John"
console.log(newObj); // Outputs an object with prototype linked to 'person'

// Summary
// Objects in JavaScript are versatile and can hold various data types including functions. They are fundamental to the language and provide the basis for more complex structures such as classes and modules. Understanding and utilizing object methods allows for efficient and effective manipulation of objects in JavaScript.
