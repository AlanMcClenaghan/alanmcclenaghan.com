// quiz begins no answers correct
var correct = 0;

//ask questions
var answer1 = prompt("Name a programming language that is also a gem.");
if (answer1.toUpperCase() === "RUBY") {
    correct +=1;
}
var answer2 = prompt("Name a programming language that is also a snake.");
if (answer2.toUpperCase() === "PYTHON") {
    correct +=1;
}
var answer3 = prompt("What language do you use to style webpages?");
if (answer3.toUpperCase() === "CSS") {
    correct +=1;
}
var answer4 = prompt("What language do you use to structure webpages?");
if (answer4.toUpperCase() === "HTML") {
    correct +=1;
}
var answer5 = prompt("What language adds interactivity to webpages?");
if (answer5.toUpperCase() === "JAVASCRIPT") {
    correct +=1;
}

// Output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

// Output rank
if ( correct === 5 ) {
    document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if ( correct >= 3 ) {
    document.write("<p><strong>You earned a silver crown.</strong></p>");
} else if ( correct >= 1 ) {
    document.write("<p><strong>You earned a bronze crown.</strong></p>");
} else {
    document.write("<p><strong>No crown for you!</strong></p>");
}