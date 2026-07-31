// MOUSE EVENTS

// Element selectors
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Event Handler
function runEvent(event) {
    event.preventDefault();
    console.log(`EVENT TYPE: ${event.type}`);
    heading.textContent = `MouseX: ${event.offsetX} MouseY: ${event.offsetY}`;
    document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 0)`;
}

// Event listeners

// Click
clearBtn.addEventListener('click', runEvent);

// Double Click
clearBtn.addEventListener('dblclick', runEvent);

// Click
clearBtn.addEventListener('mousedown', runEvent);

// Click
clearBtn.addEventListener('mouseup', runEvent);

// Click
card.addEventListener('mouseenter', runEvent);

// Click
card.addEventListener('mouseleave', runEvent);

// Click
card.addEventListener('mouseover', runEvent);

// Click
card.addEventListener('mouseleave', runEvent);

// Click
card.addEventListener('mousemove', runEvent);
