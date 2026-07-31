// FOR LOOPS – use when you know how many iterations will be required

for ( let i = 0; i < 10; i++) {
    console.log(i);
}

for ( let i = 1; i <= 10; i++) {
    console.log(`Number ${i}`);
}

// continue
for ( let i = 1; i <= 10; i++) {
    if ( i === 7 ) {
        console.log(`7 is my favourite number`);
        continue; // Makes the loop continue to the next iteration
    }
    console.log(`Number ${i}`);
}

// break
for ( let i = 1; i <= 10; i++) {
    if ( i === 7 ) {
        console.log(`7 is my favourite number`);
        break; // Makes the loop stop at the the matching iteration
    }
    console.log(`Number ${i}`);
}


// WHILE LOOPS - use when you don't know how many iterations will be required

let i = 0;

while ( i < 10) {
    console.log(`Number ${i}`);
    i++
}



// DO WHILE LOOPS - runs at least once

i = 0

do {
    console.log(`Number ${i}`);
    i++;
} while ( i < 10);


// LOOPING THROUGHT ARRAYS

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for ( let i = 0; i < cars.length; i++ ) {
    console.log(cars[i])
}

// ARRAYS ALSO HAVE THEIR OWN METHODS

cars.forEach(function(car){
    console.log(car)
});

cars.forEach(function(car, index, array){
    console.log(`${index}: ${car}`);
    console.log(array);
});

// MAP

const users = [
    { id: 1, name: 'Alan'},
    { id: 2, name: 'Ruth'},
    { id: 3, name: 'Matthew'},
    { id: 4, name: 'Lucy'},
];

const ids = users.map(function(user){
    return user.id
})

const names = users.map(function(user){
    console.log(`${user.id}: ${user.name}`);
    return user.name
})

console.log(ids);
console.log(names);


// FOR IN LOOPS

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40,
}

for ( let key in user) {
    console.log(key);
}

for ( let prop in user) {
    console.log(`${prop}: ${user[prop]}`);
}