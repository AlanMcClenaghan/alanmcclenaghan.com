// Problem: User interaction doesn't provide desired results.

// Solution: Add interactivity so the user can manage daily tasks.

// Global Selectors
const taskInput = document.querySelector('#new-task'); // new-task
const addButton = document.querySelectorAll('button')[0]; // first button
const incompleteTasksHolder = document.querySelector('#incomplete-tasks'); // incomplete-tasks
const completedTasksHolder = document.querySelector('#completed-tasks'); // completed-tasks


// Functions

// New Task List Item
const createNewTaskElement = (taskString) => {

    // Template literal used to reduce code needed.
    let listItem = document.createElement('li');
    listItem.innerHTML = `
        <input type="checkbox">
        <label>${taskString}</label>
        <input type="text">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `

    /*
    // Create List Item
    let listItem = document.createElement('li'); 
    // input (checkbox)
    const checkBox = document.createElement('input');
    // label
    const label = document.createElement('label');
    // input (text)
    const editInput = document.createElement('input');
    // button.edit
    const editButton = document.createElement('button');
    // button.delete
    const deleteButton = document.createElement('button');

    // Each element needs modifying
    checkBox.type = 'checkbox';
    editInput.type = 'text';
    label.textContent = taskString;
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete'

    // Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    */

    return listItem;
}

// Add a new task
const addTask = () => {
    console.log("Task added...")

    if ( taskInput.value === '' ) {
        alert("Please type in a task.");
    } else {
        // Create a new list item with the text from the #new-task:
        const listItem = createNewTaskElement(taskInput.value);

        // Append listItem to incompleteTaskHolder
        incompleteTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);

        // Clear taskInput
        taskInput.value = '';
    }

}

// Edit an existing task
const editTask = function() { // Arrow function did not work
    console.log("Task edited...")

    const editButton = this;
    const listItem = this.parentNode;
    const editInput = listItem.querySelector('input[type=text]');
    const label = listItem.querySelector('label');

    const containsClass = listItem.classList.contains('editMode');
    // If the class of the parent is .editMode
    if ( containsClass ) {
        // Switch from .editMode
        // label text becomes the input's value
        label.textContent = editInput.value;
        editButton.textContent = 'Edit';
    } else {
        // Switch to .editNode
        // input value becomes the label's text
        editInput.value = label.textContent;
        editButton.textContent = 'Save';
    } 
    // Toggle .editMode on the list item
    listItem.classList.toggle('editMode');
}

// Delete an existing task
const deleteTask = function() { // Arrow function did not work
    console.log("Task deleted...")
    // Remove the parent list item from the ul
    const listItem = this.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);
}


// Mark a task as complete
const taskCompleted = function() { // Arrow function did not work
    console.log("Task completed...")
    // Append the task list item to the #completed-tasks
    const listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

// Mark a task as incomplete
const taskIncomplete = function() { // Arrow function did not work
    console.log("Task incomplete...")
    // Append the task list item to the #incomplete-tasks
    const listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

// DRY Functions
const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
    console.log("Bind list item events");
    // select taskListItem's children
    const editButton = taskListItem.querySelector("button.edit");
    const deleteButton = taskListItem.querySelector("button.delete");
    const checkBox = taskListItem.querySelector("input[type=checkbox]");

    // bind editTask to edit button
    editButton.onclick = editTask;
    // bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    // bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

// Event handlers
addButton.addEventListener('click', addTask); // addButton.onclick = addTask;

// cycle over incompleteTasksHolder ul list items
for (let i = 0; i < incompleteTasksHolder.children.length; i++) {
    // Bind events to list item's children (taskCompleted
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted)
}

// cycle over completedTasksHolder ul list items
for (let i = 0; i < completedTasksHolder.children.length; i++) {
    // Bind events to list item's children (taskIncomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete)
}