// WINDOW METHODS, OBJECTS & PROPERTIES

// ALERT

// alert('Hello World');


// PROMPT

// const input = prompt('What is your name?');
// alert(input);


// CONFIRM

// if ( confirm('Are you sure?') ) {
//     console.log('YES')
// } else {
//     console.log('N0')
// }

let val;

// Outer height and width
val = window.outerHeight;
console.log(val);

val = window.outerWidth;
console.log(val);

// Inner height and width
val = window.innerHeight;
console.log(val);

val = window.innerWidth;
console.log(val);

// Scroll points
val = window.scrollY;
console.log(val);

val = window.scrollX;
console.log(val);


// Location object
val = window.location;
console.log(val);

val = window.location.hostname;
console.log(val);

val = window.location.port;
console.log(val);

val = window.location.href;
console.log(val);

val = window.location.search;
console.log(val);

// Redirect
// val = window.location.href = 'http://alanmcclenaghan.com';
// console.log(val);

// val = window.location.reload;
// console.log(val);

// History object
window.history.go(-1);
val = window.history.length;
console.log(val);

// Navigator object
val = window.navigator;
console.log(val);

val = window.navigator.appName;
console.log(val);

val = window.navigator.appVersion;
console.log(val);

val = window.navigator.userAgent;
console.log(val);

val = window.navigator.platform;
console.log(val);

val = window.navigator.vendor;
console.log(val);

val = window.navigator.language;
console.log(val);