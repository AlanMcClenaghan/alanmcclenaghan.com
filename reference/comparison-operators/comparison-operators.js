/*
if ( something ) {
    do something
} else {
    something else
}
*/

const number = '100';

// EQUAL TO
if ( number == 100 ) {
    console.log("Correct")
} else {
    console.log("inCorrect")
}

if ( number == 101 ) {
    console.log("Correct")
} else {
    console.log("inCorrect")
}


// NOT EQUAL TO
if ( number != 100 ) {
    console.log("Correct")
} else {
    console.log("inCorrect")
}

if ( number != 101 ) {
    console.log("Correct")
} else {
    console.log("inCorrect")
}


// EQUAL TO VALUE & TYPE
if ( number === 100 ) {
    console.log("Correct")
} else {
    console.log("inCorrect")
}

if ( number === 101 ) {
    console.log("Correct")
} else {
    console.log("inCorrect")
}

// NOT EQUAL TO VALUE AND TYPE
if ( number !== 100 ) {
    console.log("Correct")
} else {
    console.log("inCorrect")
}


if ( number !== 101 ) {
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}
    
// Test if undefined
if ( typeof number !== 'undefined' ) {
    console.log(`The number is ${number}`)
} else {
    console.log('No number')
}

// GREATER OR LESS THAN
if ( number >= 100 ) {
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

if ( number < 100 ) {
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// IF, ELSE IF

const color = 'red';
if ( color === 'red' ) {
    console.log("Color is red")
} else if ( color === 'blue' ) {
    console.log("Color is blue")
} else {
    console.log("Color is not red or blue")
}

// LOGICAL OPERATORS

const name = 'Steve';
const age = 20;

// AND &&
if ( age < 13 ) {
    console.log(`${name} is a child`)
} else if ( age >= 13 && age <= 19 ) {
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`)
}

// OR ||
if ( age < 16 || age >= 65 ) {
    console.log(`${name} cannot run in the race`)
} else {
    console.log(`${name} is able to run in the race`)
}

// TERNARY OPERATOR
console.log( number === 100 ? 'CORRECT' : 'INCORRECT' );