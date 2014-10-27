var mySingleton = (function(){
	var singletonInstance;

	function createSingleton(){
		//private scope
		var name;
		var birthDate;

		function privateSetName(_name){
			name = _name;
		};

		function privateSetDateOfBirth(_dateOfBirth){
			birthDate = _dateOfBirth;
		};

		//Public scope
		function publicshowInfo(){
			console.log('Name: ', name, ' birth Date: ', birthDate);
		};

		//public API
		return {
			showInfo: publicshowInfo,
			setName: function(_name){
				privateSetName(_name);
			},
			setBirthDate: function(_dateOfBirth){
				privateSetDateOfBirth(_dateOfBirth);
			}
		}
	};

	//instance
	return {
		getInstance: function(){
			if (!singletonInstance){
				singletonInstance = createSingleton();
			}

			return singletonInstance;
		}
	};

})();

var singleton = mySingleton.getInstance();
var singleton2 = mySingleton.getInstance();

singleton.setName('Luis Lugo');
singleton.setBirthDate('19 de octubre de 1990');
singleton2.showInfo();

