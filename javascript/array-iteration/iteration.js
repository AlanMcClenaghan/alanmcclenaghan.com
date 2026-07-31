const fruits = ['apple', 'pear', 'cherry'];
let capitalisedFruits = [];
const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97
let totalPrice = 0;
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let namesBeginningWithS = []
const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

for ( let i = 0; i < fruits.length; i++ ) {
    console.log(fruits[i]);
}

fruits.forEach( fruit => console.log(fruit) );

fruits.forEach( fruit => console.log(fruit.toUpperCase()) );

fruits.forEach( fruit => {
   let capitalisedFruit = fruit.toUpperCase();
   capitalisedFruits.push(capitalisedFruit);
});

console.log(capitalisedFruits);

prices.forEach( price => {
    totalPrice += price;
});

console.log(totalPrice);

names.forEach((name, index) => console.log(`${index + 1}) ${name}`));

names.forEach( name => {
   if ( name[0] === 'S' ) {             /* name.charAt(0) also works */
   namesBeginningWithS.push(name);
   }
});

console.log(namesBeginningWithS);

namesBeginningWithS.forEach((name, index) => console.log(`${index + 1}) ${name}`));

numbers.forEach( number => {
   let numbertimes10 = number * 10;
   times10.push(numbertimes10);
});

console.log(times10);