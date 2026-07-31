/*
    Event delegation: event listener added to parent element
    so that dynamically added elements still 
    work when added after the event listener
    
$('.spoiler').on('click', 'button', () => {
    // Show the spoiler text
    $('.spoiler span').show();                          
    // Hide the "Reveal Spoiler" button
    $('.spoiler button').hide();                   
});

*/

/*
$(this) does not seem to work with arrow functions, 
so a function declaration is used in this instance instead
*/
$('.spoiler').on('click', 'button', function(event) {
    // Show the spoiler text
    $(this).next().css('display', 'block');                         
    // Hide the "Reveal Spoiler" button
    $(this).hide();                   
});

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
// Append to web page
$('.spoiler').prepend($button);

// Hide the spoiler text
$('.spoiler span').hide();

/* When the button is pressed
$('.spoiler button').click( () => {
    // Show the spoiler text
    $('.spoiler span').show();                          
    // Hide the "Reveal Spoiler" button
    $('.spoiler button').hide();                   
});
*/