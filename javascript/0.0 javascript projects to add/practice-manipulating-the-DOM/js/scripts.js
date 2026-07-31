// 1: Set the text of the <h1> element
const heading1 = document.querySelector("h1");
heading1.textContent = "My Activities List";

// 2: Set the color of the <h1> to a different color
heading1.style.color = "lightskyblue";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const paragraph = document.querySelector(".desc");
paragraph.innerHTML = "A list of <em>fun</em> things I want to do today.";

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector("ul");
list.className = "list";

// 5: Create a new list item and add it to the <ul>
const newListItem = document.createElement('LI');
newListItem.innerHTML = "<input> Eat ice cream"
list.appendChild(newListItem);

// 6: Change all <input> elements from text fields to checkboxes
const inputs = document.querySelectorAll("input");
for ( i = 0; i < inputs.length; i++  ) {
   inputs[i].type = "checkbox";
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
let deleteButton = document.createElement('BUTTON');
deleteButton.textContent = "Delete";
const extra = document.querySelector(".extra");
extra.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
deleteButton.addEventListener("click", () => {
    extra.remove();
});
