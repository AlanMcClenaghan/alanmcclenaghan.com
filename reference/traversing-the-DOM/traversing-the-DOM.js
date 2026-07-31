let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
console.log(val);

val = listItem;
console.log(val);


// Get childNodes - Give us all types of nodes, not just elements

val = list.childNodes;
console.log(val);

val = list.childNodes[0];
console.log(val);

val = list.childNodes[0].nodeName;
console.log(val);

val = list.childNodes[3].nodeType;
console.log(val);

/* Node types
    1 - Element     2 - Attribute (deprecated)      3 - Text node
    8 - Comment     9 - Document itself             10 - Doctype
*/

// Get children - Gives us just the elements in a HTML collection

val = list.children;
console.log(val);

val = list.children[1];
console.log(val);

list.children[2].textContent = 'Hello World!';

// Children of children

list.children[3].children[0].id = 'test-link';
val = list.children[3].children;
console.log(val);


// firstChild and firstElementChild

val = list.firstChild;
console.log(val);

val = list.firstElementChild;
console.log(val);


// lastChild and lastElementChild

val = list.lastChild;
console.log(val);

val = list.lastElementChild;
console.log(val);


// Count child elements

val = list.childElementCount;
console.log(val);


// firstChild and firstElementChild

val = listItem.parentNode;
console.log(val);

val = listItem.parentElement;
console.log(val);

val = listItem.parentElement.parentElement; // Traverse all the way to the HTML tag
console.log(val);


// Get nextSibling  and nextelementSibling

val = listItem.nextSibling;
console.log(val);

val = listItem.nextElementSibling;
console.log(val);


// Get previousSibling  and previousElementSibling

val = listItem.previousSibling;
console.log(val);

val = listItem.previousElementSibling;
console.log(val);