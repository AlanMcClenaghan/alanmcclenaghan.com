var City = function(name, state) {
    this.name = name || 'Portland';
    this.state = state || 'Oregon';
    this.printMyCityAndState = function() {
      console.log("My city is " + this.name + ", and my state is " + this.state);
    };
};

portland = new City();
seattle = new City('Seattle', 'Washington');
salem = new City('Salem');
vancouver = new City('Vancouver', 'Washington');
London = new City('London', 'England');

portland.printMyCityAndState();
seattle.printMyCityAndState();
salem.printMyCityAndState();
vancouver.printMyCityAndState();
london.printMyCityAndState();

var Stadium = function(name, city) {
    this.name = name || 'Wembley';
    this.city = city || 'London';
    this.printMyStadiumAndCity = function() {
      console.log(this.name + " is a stadium in " + this.city);
    };
};

wembley = new Stadium();
superdome = new Stadium('The Superdome', 'New Orleans');

wembley.printMyStadiumAndCity();
superdome.printMyStadiumAndCity();