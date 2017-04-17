'use strict';
module.exports = function(arr) {
	var product;

	if (false === Array.isArray(arr)) {
		throw new Error('Please supply an array of integers');
	}

	if (arr.length < 2) {
		throw new Error('The array should at least have 2 items');
	}

	product = arr[0];

	for (var i = 1; i < arr.length; i++) {
		product *= arr[i];
	}

	return product;	
};
