// EVENT BUBBLING

document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('card content');
});

document.querySelector('.card').addEventListener('click', function(){
    console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
    console.log('col');
});

document.querySelector('.row').addEventListener('click', function(){
    console.log('row');
});

document.querySelector('.container').addEventListener('click', function(){
    console.log('container');
});

document.body.addEventListener('click', function(){
    console.log('body');
});

document.addEventListener('click', function(){
    console.log('document');
});

window.addEventListener('click', function(){
    console.log('window');
});

// EVENT DELEGATION 
    // Put a listener on a parent of the target then use a conditional statement to find the target.

document.body.addEventListener('click', deleteItem);

function deleteItem(event) {

    if ( event.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        console.log(event.target);
        console.log(event.target.parentElement);
        console.log(event.target.parentElement.parentElement);
        event.target.parentElement.parentElement.remove();
    }  
}