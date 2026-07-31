function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
    return randomNumber;
}
alert( getRandomNumber() );
console.log( getRandomNumber() );
document.write( '<h3>' + getRandomNumber() + '</h3>' );
var dieRoll = getRandomNumber();
alert( dieRoll );
console.log( dieRoll );
document.write( '<h3>' + dieRoll + '</h3>' );