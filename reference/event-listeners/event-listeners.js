// EVENT LISTENERS AND THE EVENT OBJECT

// Anonymous function as second parameter
document.querySelector('.btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('Hello World!')
    
});

// Named function as second parameter
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    console.log('clicked')

    let val;

    // Event object
    val = event;
    console.log(val);

    // Event target element
    val = event.target;
    console.log(val);

    event.target.id = 'event';
    val = event.target.id;
    console.log(val);

    val = event.target.className;
    console.log(val);

    val = event.target.classList;
    console.log(val);

    event.target.innerText = 'Clicked';

    // Event Type
    val = event.type;
    console.log(val);

    // Timestamp
    val = event.timeStamp;
    console.log(val);

    // Coordinates of event relative to window
    val = event.clientY;
    console.log(val);

    val = event.clientX;
    console.log(val);

    // Coordinates of event relative to the event
    val = event.offsetY;
    console.log(val);

    val = event.offsetX;
    console.log(val);

};