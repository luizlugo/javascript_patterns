//class definition
function Car(model, year, miles){
	this.model = model;
	this.year = year;
	this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function(){
		return this.model + ' has done ' + this.miles + ' miles ';
}

//instance of the class
var civic = new Car('Honda Civic', 2014, 2000);
var tacoma = new Car('Toyota Tacoma', 2014, 3000);

console.log(civic.toString());
console.log(tacoma.toString());