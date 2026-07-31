function getArea( width, length, unit ) {
    var area = width * length;
    return area + " " + unit;
}

console.log( getArea( 10, 20, "sq m") );
console.log( getArea( 20, 100, "sq ft") );
console.log( getArea( 100, 200, "sq miles") );
console.log( getArea( 1000, 1000, "sq km") );

function getRandomNumber( min, max ) {
    if ( isNaN(min) || isNaN(max) ) {
        throw new Error("Both arguments must be numbers");
    }
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log( getRandomNumber(1,6) );
console.log( getRandomNumber(10,60) );
console.log( getRandomNumber(1000,6000) );
console.log( getRandomNumber(10000,60000) );

//var random = getRandomNumber( min, max );