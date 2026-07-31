// Arrow function expression, single argument, concise
const addToTen = num => 10 + num;

console.log(addToTen(5));

// Arrow function expression, multiple arguments, concise
const divideUs = (num1, num2) => num1/num2;

console.log(divideUs(6, 3));

// Arrow function expression, no argument
const printMyName = () => {
  let myName = 'Ashley';
	console.log(myName);
}

printMyName()