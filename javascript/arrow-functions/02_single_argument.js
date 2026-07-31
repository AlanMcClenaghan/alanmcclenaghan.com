/*

Function declaration, single argument


function square(x) {
    return x * x;
}
*/

// Arrow function expression, single argument

const square = (x) => {
    return x * x;
}

// Arrow function expression, single argument, concise

const square = x => x * x;

/*

Function declaration, single argument

function cube(x) {
    return square(x) * x;
}
*/

// Arrow function expression, single argument

const cube = (x) => {
    return square(x) * x;
}


// Arrow function expression, single argument, concise

const cube = x => square(x) * x;