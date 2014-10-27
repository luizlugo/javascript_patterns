var mySingleton = (function(){
	var instance;

	function init(){
		//Singleton
		//private functions and variables
		function privateMethod(){
			console.log('I am private');
		};
		var privateVariable = "I am also private";
		var privateRandomNumber = Math.random();

		//PUBLIC API
		return {
			//Public methods and variables
			publicMethod: function(){

			},
			publicProperty: 'I am a public property',
			getRandomNumber: function(){
				return privateRandomNumber;
			}
		};
	};

	//Instance
	return {
		getInstance: function(){
			if (!instance){
				instance = init();
			}else{
				console.log('instance already exists');
			}

			return instance;
		}
	};
})();

var singleton1 = mySingleton.getInstance();
console.log(singleton1.getRandomNumber());
var singleton2 = mySingleton.getInstance();
console.log(singleton2.getRandomNumber());
