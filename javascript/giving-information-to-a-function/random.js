function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}

console.log( getRandomNumber( 6 ) );
console.log( getRandomNumber( 10 ) );
console.log( getRandomNumber( 100 ) );
console.log( getRandomNumber( 1000000 ) );

function getArea(width, length, unit) {
    var area = width * length;
    return area + " " + unit;
}

console.log( getArea( 10, 20, 'sq ft' ) );
console.log( getArea( 100, 10, 'sq ft' ) );
console.log( getArea( 100, 100, 'sq m' ) );