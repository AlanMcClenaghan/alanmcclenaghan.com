// Arrow function expression, single argument, concisec
const multiplyByTen = num => 10 * num;

console.log(multiplyByTen(8));

// Arrow function expression, no argument
const printToTen = () => {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}

printToTen();

// Arrow function expression, multiple arguments, concise
const addUs = (num1, num2) => console.log(num1 + num2)

addUs(8, 9);