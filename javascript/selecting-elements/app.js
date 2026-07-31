/* Selects the first h1 element and assigns it to the myHeading variable */
const myHeading = document.getElementsByTagName('h1')[0];
/* Assigns the value 'purple' to the style color property of myHeading */
myHeading.style.color = 'purple';

/* Selects all p elements on the page 
and assigns the HTMLcollection to the paragraphs variable */
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
/* Assigns the value 'italic' to the fontStyle property 
of the element at index 3 in the paragraphs variable */
paragraphs[3].style.fontStyle = 'italic';
/* Assigns the value 'purple' to the style color property 
of the element at index 3 in the paragraphs variable */
paragraphs[3].style.color = 'purple';

/* Selects all li elements on the page 
and assigns the HTMLcollection to the myList variable */
const myList = document.getElementsByTagName('li');

/* for loop through the myList HTMLCollection
    assigning the value 'purple' 
    to the style color property of each element */
for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

/*
const errorNotPurple = document.getElementsByClassName('error-not-purple');
    The selection above is the same as the selection below:
        Selects all elements with the class of 'error-not-purple'
        and assigns the HTMLcollection to the errorNotPurple variable
*/
const errorNotPurple = document.querySelectorAll('.error-not-purple');

/* for loop through the errorNotPurple HTMLCollection
    assigning the value 'red' 
    to the style color property of each element */
for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}

/* Selects all li elements with an even index value 
and assigns the HTMLcollection to the evens variable */
const evens = document.querySelectorAll('li:nth-child(even)');


/* for loop through the evens HTMLCollection
    Assigning the value 'italic' 
    to the fontStyle property of each element */
for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.fontStyle = 'italic';
}

/* Selects all li elements with an odd index value 
and assigns the HTMLcollection to the odds variable */
const odds = document.querySelectorAll('li:nth-child(odd)');

/* for loop through the odds HTMLCollection
    Assigning the value 'lightgray' 
    to the style color property of each element */
for (let i = 0; i < odds.length; i += 1) {
  odds[i].style.backgroundColor = 'lightgray';
}