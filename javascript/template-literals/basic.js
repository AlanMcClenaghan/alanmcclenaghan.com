// Single Quotes string literal
const singleQuotes = '<p>Single quotes</p>';

// Double Quotes string literal
const doubleQuotes = "<p>Double quotes</p>";

// Template literal string
const templateLiteral = "<p>Template literal</p>";

// String literals are added to result variable
const result = singleQuotes + doubleQuotes + templateLiteral;

/* Selects the element with the class of basic 
and adds the contents of the result variable as innerHTML */
document.querySelector('.basic').innerHTML = result;
