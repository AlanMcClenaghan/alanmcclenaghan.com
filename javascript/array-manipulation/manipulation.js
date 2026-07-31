// filter() method

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const startsWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startsWithS);

console.log(sNames);


const numbers = [1,2,3,4,5];
const no3 = numbers.filter(number => number !== 3);
const number2 = numbers.filter(number => number === 2);

console.log(no3);
console.log(number2);


const moreNumbers = [1,2,3,4,5,6,7,8,9,10];
const evens = moreNumbers.filter(number => number % 2 === 0);

console.log(evens);

const years = [1800, 1895, 1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;

century20 = years.filter(year => {
    if ( year >= 1900 && year <= 2000 ) {
       return true;
    }
});

console.log(century20);


// map() method

const strings = ['1','2','3','4','5'];
const stringsToNumbers = strings.map(string => parseInt(string, 10));

console.log(stringsToNumbers);


const fruits = ['apple', 'pear', 'cherry'];
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase())

console.log(capitalizedFruits);

const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceToPounds = price => `£${price.toFixed(2)}`;
const displayPrice = prices.map(priceToPounds);

console.log(displayPrice);


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

abbreviatedDays = daysOfWeek.map(day => day.substr(0,3));

console.log(abbreviatedDays);


// reduce() method

let total = [ 0, 1, 2, 3 ].reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
);

console.log(total)


const morePrices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

const totalPrices = morePrices.reduce(( sum, price ) => sum + price, 0 );

console.log(totalPrices);

const moreNames = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
const gNameCount = moreNames.reduce((count, name) => {
    if ( name[0] === 'G' ) {
        return count + 1;
    }
    return count;
}, 0);

console.log(gNameCount);

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce((count, number) => {
    if ( number.match(/503/g) ) {
        return count + 1;
    }
    return count;
}, 0);

console.log(numberOf503);