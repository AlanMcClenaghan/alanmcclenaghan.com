//JavaScript code for Meets Expectations grade

//Create a function named getRandomQuote:
function getRandomQuote() {
  //which selects a random quote object from the quotes array & returns the randomly selected quote object
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

//Create a function named printQuote which follows these rules:
function printQuote() {
  //printQuote calls the getRandomQuote function and stores the returned quote object in a variable
  var randomQuote = getRandomQuote();
  //printQuote constructs a string containing the different properties of the quote object using the following HTML template:
  /*
    <p class="quote"> [quote here] </p>
    <p class="source"> [source here]
    <span class="citation"> [citation here] </span>
    <span class="year"> [year here] </span>
    </p>
  */
  var theQuote = '<p class="quote">' + randomQuote.quote + '</p>';
  theQuote += '<p class="source">' + randomQuote.source;
  //printQuote doesn't add a for a missing citation or a if the year property is missing
  if (randomQuote.citation) theQuote += '<span class="citation">' + randomQuote.citation + '</span>';
  if (randomQuote.year) theQuote += '<span class="year">' + randomQuote.year + '</span>';
  theQuote += '</p>';
  //printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
  document.getElementById('quote-box').innerHTML = theQuote;
}

printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);