const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'My name is William'
const tags = 'web design,web developer,front end developer'

let val;

val = firstName + lastName;
console.log(val);

// Concatenaton
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'Alan';
val += ' McClenaghan';
console.log(val);

val = 'Alan';
val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escape characters
val = "That's awesome, I can't wait.";
console.log(val);

val = 'That\'s awesome, I can\'t wait.';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// Concat()
val = firstName.concat(' ', lastName);
console.log(val);

// Case change
val = firstName.toUpperCase();
console.log(val);

val = val.toLowerCase();
console.log(val);

// IndexOf()
val = firstName[2];
console.log(val);

val = firstName.indexOf('l');
console.log(val);

val = firstName.lastIndexOf('l');
console.log(val);

    // Will return -1 if not present
    val = firstName.indexOf('z');
    console.log(val);

// CharAt()
val = firstName.charAt('3');
console.log(val);

// Get last character
val = firstName.charAt(firstName.length - 1);
console.log(val);

// substring()
val = firstName.substring(0, 4);
console.log(val);

// slice()
val = firstName.slice(0, 4);
console.log(val);

val = firstName.slice(-3);
console.log(val);

// split()
val = firstName.split('');
console.log(val);

val = str.split(' ');
console.log(val);

val = tags.split(',');
console.log(val);

// replace()
val = str.replace('William', 'Alan');
console.log(val);

// includes()
val = str.includes('William');
console.log(val);

val = str.includes('Jack');
console.log(val);