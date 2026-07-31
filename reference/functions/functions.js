// FUNCTION DECLARATIONS

function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
    return `Hello ${firstName} ${lastName}`;
}

greet('Alan', 'McClenghan');
console.log(greet('John', 'Doe'));


// With defaults – ES6 simplies commented out ES5
function greet(firstName = 'John', lastName = 'Doe') {
    // if ( typeof firstName === 'undefined' ) { firstName = 'John' }
    // if ( typeof lastName === 'undefined' ) { lastName = 'John' }
    console.log(`Hello ${firstName} ${lastName}`);
    return `Hello ${firstName} ${lastName}`;
}

greet();
greet('Alan', 'McClenghan');
console.log(greet());
console.log(greet('Steve', 'Smith'));


// FUNCTION EXPRESSION
// Named function with anonymous function (3 is a default)
const square = function( x = 3 ) {
    return x * x
};

console.log(square());
console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
    console.log('IIFE ran...');
})();

(function (name) {
    console.log('Hello ' + name);
})('Brad');

// PROPERTY METHODS
const todo = {
    add: function() {
        console.log('Add todo...');
    },
    edit: function(job) {
        console.log(`Edit todo: ${job}`)
    }
}

todo.delete = function() {
    console.log('Delete todo...');
}

todo.add();
todo.edit('washing up');
todo.delete();