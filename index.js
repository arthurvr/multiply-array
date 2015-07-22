'use strict';
module.exports = function (arr) {
	var getNumbers = require('get-numbers');
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array to multiply its items');
	}
	arr = getNumbers(arr);

	if (arr.length < 2) {
		throw new Error('The array should at least have 2 numbers');
	}

	var product = arr[0];

	for (var i = 1; i < arr.length; i++) {
		product *= arr[i];
	}

	return product;
};
