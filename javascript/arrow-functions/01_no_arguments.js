const name = "Alan";

/*

Function declaration, no argument

function sayName() {
    const message = "My name is " + name;
    console.log(message);
}
*/

// Arrow function expression, no argument

const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

/*

Function declaration, no argument

function sayBye() {
  console.log("Bye " + name);  
}
*/

// Arrow function expression, no argument

const sayBye = () => {
  console.log("Bye " + name);  
}

// Arrow function expression, no argument, concise

const sayBye = () => console.log("Bye " + name);