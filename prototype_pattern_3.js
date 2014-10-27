var vehiclePrototype = {
	init: function(_carModel){
		this.model = _carModel;
	},
	getModel: function(){
		console.log('The model of this car is...', this.model);
	}
};

function vehicle(_model){
	function F(){};
	F.prototype = vehiclePrototype;

	var f = new F();

	f.init(_model);
	return f;
};

var car  = vehicle('Ford Escort');
car.getModel();
var car2 = vehicle('Chevrolet Camaro');
car2.getModel();