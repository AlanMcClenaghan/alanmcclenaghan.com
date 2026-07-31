let val;

val = 5;
console.log(val);
console.log(typeof val);
console.log(val.length);

// Number to string
val = String(555);
val = String(4+4);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

// Number to string
val = String(4+4);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

// Boolean to string
val = String(true);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

// Date to string
val = String(new Date());

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

// Number to string
val = String([1,2,3,4]);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//  toString()
val = (5000).toString();

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true).toString();

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//=========================================//

//  String to number

val = Number('Hello');

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number('5');

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//  Boolean to number

val = Number(true);

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number(false);

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//  Null to number

val = Number(null);

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//  parseInt()
val = parseInt('100');

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//  parseInt()
val = parseInt('33.33');

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

//  parseFloat()
val = parseFloat('33.33');

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));