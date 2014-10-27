var carManagerModule = (function(){
	var carManager = {
		requestInfo: function(_model, _id){
			return "The information for"+ _model+ " with ID " + _id + "is foobar";
		},
		buyVehicle: function(_model, _id){
			return "You have successfully purchased Item " + _id + ", a " + _model;
		},
		arrangeViewing: function(_model, _id){
			return "You have successfully booked a viewing of " + _model + " ( " + _id + " ) ";
		}
	};

	carManager.execute = function(_name){
		return carManager[_name] && carManager[_name].apply(carManager, [].slice.call(arguments, 1));
	};

	return carManager;
})();

console.log(carManagerModule.execute("arrangeViewing", "Ferrari", "14523" ));
console.log(carManagerModule.execute("requestInfo", "Ford Mondeo", "54323" ));
console.log(carManagerModule.execute("requestInfo", "Ford Escort", "34232" ));
console.log(carManagerModule.execute("buyVehicle", "Ford Escort", "34232" ));