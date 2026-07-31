// Object literal

const bradObject = {
    name: 'Brad',
    age: 30
}

console.log(bradObject);

console.log(bradObject.name);
console.log(bradObject.age);

// Object constructor function
function Person(name, age, dob) {
    this.name = name;
    this.age = age;
    console.log(this);
    this.birthday = new Date(dob);
}

console.log(this);

const brad = new Person('Brad', 36);
const john = new Person('John', 30);

console.log(brad);
console.log(john);

console.log(brad.name);
console.log(john.name);

console.log(brad.age);
console.log(john.age);

// Object constructor function
function Person2(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const difference = Date.now() - this.birthday.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}
const alan = new Person2('Alan', '8-29-1972');
const ruth = new Person2('Ruth', '11-24-1972');
const matthew = new Person2('Matthew', '10-26-2009');
const lucy = new Person2('Lucy', '4-14-2012');

console.log(`${alan.name} is ${alan.calculateAge()}`);
console.log(`${ruth.name} is ${ruth.calculateAge()}`);
console.log(`${matthew.name} is ${matthew.calculateAge()}`);
console.log(`${lucy.name} is ${lucy.calculateAge()}`);