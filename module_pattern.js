var testModule = (function(){
	var counter = 0;

	return {
		incrementCounter: function(){
			return counter++;
		},
		decrementCounter: function(){
			return counter--;
		},
		resetCounter: function(){
      		counter = 0;
		},
		showCounter: function(){
			console.log("Counter: ", counter);
		}
	};
})();

//usage
testModule.incrementCounter();
testModule.showCounter();
testModule.resetCounter();
testModule.showCounter();
