var myNameSpace = (function(){
	//private variables
	var myPrivateVar, myPrivateMethod;
	//A private counter variable
	myPrivateVar = 0;
	//A private function which logs any arguments
	myPrivateMethod = function(foo){
		console.log(foo);
	};

	return {
		//A public variable
		myPublicVar: 'Foo',
		//A public function utilizing privates
		myPublicFunction: function(bar){
			//increment our private counter
			myPrivateVar++;
			//calling our private method using bar
			myPrivateMethod(bar);
		}
	};
})();