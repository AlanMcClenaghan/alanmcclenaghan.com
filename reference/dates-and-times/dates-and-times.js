const today = new Date();
console.log(today);

let birthday = new Date('08-29-1972 12:01:00');
console.log(birthday);

birthday = new Date('August 29 1972');
console.log(birthday);

birthday = new Date('08/29/1972');
console.log(birthday);

let val;

val = today;
console.log(val);
console.log(typeof val);

val = today.toString();
console.log(val);
console.log(typeof val);

val = today.toDateString();
console.log(val);
console.log(typeof val);

val = birthday;
console.log(val);

val = birthday.toString();
console.log(val);

val = birthday.toDateString();
console.log(val);

val = today;
console.log(val);

val = today.getMonth(); // 0 = January
console.log(val);

val = today.getDate();
console.log(val);

val = today.getDay();
console.log(val);

val = today.getFullYear();
console.log(val);

val = today.getHours();
console.log(val);

val = today.getMinutes();
console.log(val);

val = today.getSeconds();
console.log(val);

val = today.getMilliseconds();
console.log(val);

val = today.getTime();
console.log(val);

birthday.setFullYear(1980);
console.log(birthday);

birthday.setMonth(6);
console.log(birthday);

birthday.setDate(17);
console.log(birthday);

birthday.setHours(13);
console.log(birthday);

birthday.setMinutes(54);
console.log(birthday);

birthday.setSeconds(47);
console.log(birthday);