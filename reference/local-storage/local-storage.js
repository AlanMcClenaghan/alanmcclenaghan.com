// Set local storage item
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// Set local storage item
sessionStorage.setItem('name', 'Beth');
sessionStorage.setItem('age', '28');

// Get from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

// Get from session storage
name = sessionStorage.getItem('name');
age = sessionStorage.getItem('age');
console.log(name, age);

// Remove from local storage item
localStorage.removeItem('name');

// Remove from session storage item
sessionStorage.removeItem('name');

// Clear storage
// localStorage.clear();
// sessionStorage.clear();

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.querySelector('#task');
    const task = input.value;
    console.log(task);

    let tasks;

    if ( localStorage.getItem('tasks') === null ) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks))

    input.value = '';
});

    console.log(localStorage);

    const tasks = JSON.parse(localStorage.getItem('tasks'));

    console.log(tasks);

    tasks.forEach(function(task) {
        console.log(task);
    });
