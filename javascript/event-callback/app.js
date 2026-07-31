const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => event.target.className = "highlight";
const blurHandler = event => event.target.className = "";

nameInput.addEventListener('click', focusHandler);

nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('click', focusHandler);

messageTextArea.addEventListener('blur', blurHandler);