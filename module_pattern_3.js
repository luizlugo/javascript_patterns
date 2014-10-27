var basketModule = (function(){
	//privates
	var basket = [];
	
	function dosomethingPrivate(){
		//test 1
	};

	function doSomethingElsePrivate(){
		//test 2
	};

	return {
		//Add items to our basket
		addItem: function(values){
			basket.push(values);
		},
		//Get the count of items in the basket
		getItemCount: function(){0
			return basket.length;
		},
		//Public alias to a private function
		dosomething: dosomethingPrivate,
		//Get the total value of items in the basket
		getTotal: function(){
			var q = this.getItemCount(), p = 0;
			while (q--){
				p += basket[q].price;
			}
			return p;
		}
	};
})();

basketModule.addItem({
	item: 'bread',
	price: 0.5
});

basketModule.addItem({
	item: 'butter',
	price: 0.3
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());
console.log(basketModule.basket);