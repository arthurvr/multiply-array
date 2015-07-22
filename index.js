'use strict';
module.exports = function(arr) {
	var product = 1;

	arr = Array.isArray(arr) ? arr : arguments;

	if (arr.length >= 2) {
		for (var i = 0; i < arr.length; i++) {
			product *= arr[i];
		}

		return product;
	} else {
		throw new Error('The array should at least have 2 items');
	}
};
