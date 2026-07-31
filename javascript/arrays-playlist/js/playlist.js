// Array containing list of songs
var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

// Function to display a message on the screen 
function display(message) {
  document.write(message);
}

/* Function (with the parameter list)
    creates a string variable which begins an ordered list.
    For Loop adds list items via the list parameter.
    The ordered list is closed.
    The display function is called 
    (and the string variable is added as an argument)
*/
function printList( list ) {
    var listHTML = "<ol>";
    for ( var i = 0; i < list.length; i++) {
        listHTML += "<li>" + list[i] + "</li>"; 
    }
    listHTML += "</ol>";
    display(listHTML);
}

/* printList function is called (and the playList array 
is passed into it as an argument) */
printList(playList)