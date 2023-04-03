//Business Logic for Places List
function Places() {
  this.cities = {};
}

Places.prototype.addCity = function(city) {
  this.cities[city.name] = city;
};

//Business Logic for City Details
function City(name, country, language, currency){
  this.name = name;
  this.country = country;
  this.language = language;
  this.currency = currency;
}
//Examples:
// let myPlaces = new Places();
// let SanDiego = new City("San Diego", "USA", "ENG", "USD",);
// let Tokyo = new City("Tokyo", "Japan", "Japanese", "YEN");
// let Portland = new City("Portland", "USA", "ENG", "USD");

// myPlaces.addCity(SanDiego);
// myPlaces.addCity(Tokyo);
// myPlaces.addCity(Portland);

// myPlaces.cities["San Diego"];
// myPlaces.cities["Tokyo"];
// myPlaces.cities["Portland"];

