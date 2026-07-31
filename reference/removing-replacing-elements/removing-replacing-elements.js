// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'title-task';

// New text node
newHeading.appendChild(document.createTextNode('Text List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action')

// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);

// REMOVE ELEMENT
const LIs = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
LIs[0].remove()

// Remove list item
list.removeChild(LIs[3])

console.log(cardAction);


// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
console.log(val);

val = link.classList;
console.log(val);

val = link.classList[0];
console.log(val);

link.classList.add('test');
console.log(val);

link.classList.remove('test');
console.log(val);

val = link;
console.log(val);


// Attributes
val = link.getAttribute('href');
console.log(val);

val = link.setAttribute('href', 'http://google.com');
console.log(val);

val = link.hasAttribute('href');
console.log(val);

val = link.setAttribute('title', 'google');
console.log(val);

val = link.hasAttribute('title');
console.log(val);

link.removeAttribute('title');
console.log(val);

val = link;
console.log(val);