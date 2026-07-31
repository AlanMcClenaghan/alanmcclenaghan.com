// document.getElementsByClassName - returns a HTML collection

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello World!';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);


// document.getElementsByTagName - returns a HTML collection

let LIs = document.getElementsByTagName('li');
console.log(LIs);
console.log(LIs[0]);
LIs[1].style.color = 'red';
LIs[4].textContent = 'Hello World!';


// Convert HTML Collection into array
LIs = Array.from(LIs);
console.log(LIs);

LIs.reverse();
console.log(LIs);

LIs.forEach(function(li, index) {
    console.log(li);
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});


// document.querySelectorAll - returns a node list

const newItems = document.querySelectorAll('ul li')

console.log(newItems);
console.log(newItems[0]);

newItems.forEach(function(li, index) {
    console.log(li);
    console.log(li.textContent);
    li.textContent = `${index}: Goodbye`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li) {
    li.style.background = '#ccc';
});

for ( let i = 0; i < liEven.length; i++ ) {
    liEven[i].style.background = '#f4f4f4';
};