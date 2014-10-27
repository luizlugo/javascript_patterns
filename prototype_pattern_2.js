var vehicle = {
	getModel: function(){
		console.log("The model of this vehicle is...", this.model);
	}
}

var car = Object.create(vehicle, {
	"id": {
		value: 1,
		enumerable: true
	},
	"model":{
		value: "Ford",
		enumerable: true
	}
});


var car2 = Object.create(vehicle, {
	"id": {
		value: 1,
		enumerable: true
	},
	"model":{
		value: "Chevrolet",
		enumerable: true
	}
});

car.getModel();
car2.getModel();
