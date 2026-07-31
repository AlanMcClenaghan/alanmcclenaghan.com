// Elements selected and assigned to variables
const toggleList = document.querySelector('#toggle-list');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('.add-item-input');
const addItemButton = document.querySelector('.add-item-button');
const removeItemButton = document.querySelector('.remove-item-button');

/*
Event handler added to toggleList element
    Function in conditional statement
        Changes the lists style property to 'none' if 'block'
        and changes the button text to 'Show'
        Changes the lists style property to 'block' if 'none'
        and changes the button text to 'Hide'
*/
toggleList.addEventListener('click', () => {
  if ( listDiv.style.display === 'block') {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
  } else {
    listDiv.style.display = 'block'; 
    toggleList.textContent = 'Hide list';
  }         
})

/*
Event handler added to descriptionButton element
    function uses the value of the input element
    to set the text content of the paragraph element
    The input field in then cleared
*/
descriptionButton.addEventListener('click', () => {
  descriptionP.textContent = descriptionInput.value + `:`;
  descriptionInput.value = '';
})

// innerHTML can do more than just handling text, it can also read and alter the elements on a web page.

// Sets the title attribute of the paragraph element
descriptionP.title = "List description";

/*
Event handler added to addItemButton element
    ul element is selected and added to a variable
    A list item element is created and added to a variable
    The li textContent is set as the value entered in the input field
    The new list item is added as a child of the ul element
    The input field in then cleared
*/
addItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});


/*
Event handler added to removeItemButton element
    ul element is selected and added to a variable
    The last list item element is slected and added to a variable
    The last list item is removed from the ul element
*/
removeItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});