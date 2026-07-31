// document.getElementById()

console.log(document.getElementById('task-title'));


// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').textContent);

const taskTitle = document.getElementById('task-title');
console.log(taskTitle);

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = 'white';
taskTitle.style.padding = '5px';

// Change content
taskTitle.textContent = 'Text List';
taskTitle.innerText = 'My List';
taskTitle.innerHTML = '<span style="color:red;background:white">Task List</span>';


// document.querySelector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));


document.querySelector('ul').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('ul li:last-child').style.color = 'blue';
document.querySelector('ul li:nth-child(3)').style.color = 'blue';
document.querySelector('ul li:nth-child(4)').textContent = 'Hello World!';