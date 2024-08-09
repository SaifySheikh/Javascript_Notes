// Array Destructuring 
// const arr=[1,2,3];

// [a,b,c]=arr;
// console.log(a);

//With Default Value

// let a,b;
// [a,b=5]=[1];
// console.log(b);

//Function Destructuring
// function f(){
//     return [5,5];
// }
// [a,b]=f();
// console.log(a);

//Object Destructuring 

const person={
    name : "Saify",
    age : 21,
}

// const {name,age}=person;
// console.log(name);
// console.log(age);


// function info(person){
//     console.log(`Name is ${person.name}`);
//     console.log(`Age is ${person.age}`);
// }

function info({name,age}){
    console.log(`Name is ${name}`);
    console.log(`Age is ${age}`);
}

info(person);