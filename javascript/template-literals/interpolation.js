// Function using basic strings
function like(thing) {
  return 'I like ' + thing;
}

/* Function using a template literal.
The dollar sign with curly brackets are used to 
mark the dynamic values in the template literal.
When the program runs, the contents of the curly brackets 
are evaluated and placed, or interpolated, into the string.*/
function love(thing) {
  return `I love ${thing}`;
}

// Variable to hold sentence constructed using template literal
const sentence1 = '<p>' + like('apples') + ', but' + love('oranges') + '.</p>';

// Variable to hold sentence constructed using template literal
// Note the function espression passed in the curly brackets
const sentence2 = `<p>${like(`apples`)}, but ${love('oranges')}.</p>`;

/* Selects the element with the class of interpolation1 
and adds the contents of the sentence variable as innerHTML */
document.querySelector('.interpolation1').innerHTML = sentence1;

/* Selects the element with the class of interpolation2 
and adds the contents of the sentence variable as innerHTML */
document.querySelector('.interpolation2').innerHTML = sentence2;