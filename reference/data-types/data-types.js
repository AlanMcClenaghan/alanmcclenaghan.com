// PRIMITIVE

// String
const name = 'John Doe';
const numberString = '18';
console.log(typeof name);
console.log(typeof numberString);

// Number
const age = 45;
console.log(typeof age);

// Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);


// REFERENCE TYPES - OBJECTS

// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

const address = {
    city: 'London',
    state: 'UK',
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);