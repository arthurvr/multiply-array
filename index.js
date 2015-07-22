'use strict';
module.exports = function(arr) {
	var product;

	arr = Array.isArray(arr) ? arr : arguments;
	product = arr[0];

	if (arr.length < 2) {
		throw new Error('The array should at least have 2 items');
	}

	for (var i = 1; i < arr.length; i++) {
		product *= arr[i];
	}

	return product;	
};
