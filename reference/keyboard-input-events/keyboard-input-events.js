// MOUSE EVENTS

// Element selectors
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// Event Handler
function submit(event) {
    event.preventDefault();
    console.log(`EVENT TYPE: ${event.type}`);

    // Get input value
    console.log(taskInput.value);

    // Clear input
    taskInput.value = '';
}

// Event Handler
function runEvent(event) {
    console.log(`EVENT TYPE: ${event.type}`);

    // Get input value
    console.log(event.target.value);

    heading.innerText = event.target.value
}

// Event listeners

// Submit event
form.addEventListener('submit', submit);

// Keydown
taskInput.addEventListener('keydown', runEvent);

// Keyup
taskInput.addEventListener('keyup', runEvent);

// Keypress
taskInput.addEventListener('keypress', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent);

// Blur
taskInput.addEventListener('blur', runEvent);

// cut
taskInput.addEventListener('cut', runEvent);

// paste
taskInput.addEventListener('paste', runEvent);

// input
taskInput.addEventListener('input', runEvent);

// change - used on select lists
select.addEventListener('change', runEvent);