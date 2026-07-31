const myHeading = document.getElementById('myHeading');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

button1.addEventListener('click', () => {
  if ( button1.textContent === 'Change headline color' ) {
    myHeading.style.color = text1.value;
    button1.textContent = 'Reset';
  } else {
    myHeading.style.color = 'initial';
    button1.textContent = 'Change headline color';
  }
  text1.value = '';
});

button2.addEventListener('click', () => {
  if ( button2.textContent === 'Change headline background color' ) {
    myHeading.style.background = text2.value;
    button2.textContent = 'Reset';
  } else {
    myHeading.style.background = 'initial';
    button2.textContent = 'Change headline background color';
  }
  text2.value = '';
});
