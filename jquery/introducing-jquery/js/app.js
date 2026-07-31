// Removed as message is best hidden with CSS using display:none;
// $('#flashMessage').hide();

/* Click event handler added to the preview button
    Callback function
        Takes the value of the Title Input 
        and assigns it to the title variable
        Takes the value of the Content Input 
        and assigns it to the content variable
        
        Contents of the title variable 
        is added as text to the blog title preview
        Contents of the content variable 
        is added as html to the blog content preview
        
        The flash message then slides down over 1 second
        then after 3 seconds
        the flash message slides up and disappears again.

*/     
$('#previewButton').click( () => {
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();

    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content);

    $('#flashMessage')
    .slideDown(1000)
    .delay(3000)
    .slideUp();
});