// jQuery :odd selector
const $odd = $('a:odd');
// jQuery "starts with" selector
const $secureLinks = $('a[href^="https://"]');
// jQuery "ends with" selector
const $pdfs = $('a[href$=".pdf"]');

/* Selects div with the id of links 
and assigns it to the $links variable */
const $links = $('#links');

/* Changes the target attribute 
of the $secureLinks HTMLCollection to "_blank" */
$secureLinks.attr('target', '_blank');

/* Changes the download attribute 
of the $pdfs HTMLCollection to true */
$pdfs.attr('download', true);

/* Adds the class of 'secure' 
to the $secureLinks HTMLCollection */
$secureLinks.addClass('secure');

/* Adds the class of 'pdf' 
to the $pdfs HTMLCollection */
$pdfs.addClass('pdf');

/* jQuery creates a new label element and
adds it to the $pdfCheckbox variable */
const $pdfCheckbox = $("<label><input type='checkbox'> Allow PDF downloads</label>");

/* The jQuery label element is appended 
to the $links element as unobtrusive code 
so that the checkbox isn't present i
f JavaScript is broken or otherwise unavailable. */
$links.append($pdfCheckbox);

//Click handler added to the $pdfs HTMLCollection
$pdfs.on('click', function(event) {
    // Check if checkbox has been checked
    // If zero checkboxes are checked
    if( $(':checked').length === 0 ) {
        //  Prevent download of document
        event.preventDefault();
        //  Alert the user
        alert('Please check the box to allow PDF downloads');
    }
});

/*
Selects all the links on the page
each() method loops through the HTMLCollection
and executes a function with each item,
    the function contains two argument
        the index of the item in the collection 
        and the element to be looped over
    In this case, the href attribute of the links
        is assigned to the url variable
    The .parent() method is used to traverse 
        to the links parent element and the url 
        is appended using a template literal
        
$('a').each(function(index, link) {
    const url = $(link).attr('href');
    $(link).parent().append(` (${url})`);
});
*/

/* 
Shorter version of the code above removes the arguments 
from the function and uses the "this" keyword instead
*/
$('a').each(function() {
    const url = $(this).attr('href');
    $(this).parent().append(` (${url})`);
});