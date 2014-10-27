var myCar = {
	name: 'ford escort',
	drive: function(){
		console.log('Wee. I am driving');
	},
	panic: function(){
		console.log('Wait. How do yo stop this thing?');
	}
};

//Use Object.create to instatiate a new car
var yourCar = Object.create(myCar);
console.log(yourCar.name);
