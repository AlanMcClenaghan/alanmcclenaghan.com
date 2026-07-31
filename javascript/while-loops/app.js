var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== randomNumber) {
  guess = getRandomNumber( upper );
  attempts += 1;
}

document.write("<p>The random number was: " + randomNumber + "<p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");

var secret = prompt("What is the secret password?");

while (secret !== "sesame") {
  secret = prompt("That's not it! Try again");
}

document.write("You know the secret password. Welcome.");