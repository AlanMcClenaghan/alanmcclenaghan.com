// prototype
    // function
    // constructor
    // object


// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const difference = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(difference);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
}

// Calculate age as prototype
Person.prototype.calculateAge = function() {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Get full name prototype
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(john);
console.log(mary);

console.log(john.calculateAge());
console.log(mary.calculateAge());

console.log(john.getFullName());
console.log(mary.getFullName());

mary.getsMarried('Smith')
console.log(mary.lastName);
console.log(mary.getFullName());

// Object prototype methods
console.log(john.hasOwnProperty('firstName')); //true
console.log(john.hasOwnProperty('lastName')); //true
console.log(john.hasOwnProperty('birthday')); //true
console.log(john.hasOwnProperty('getFullName')); //false
console.log(john.hasOwnProperty('getsMarried')); //false