'use strict';
var assert = require('assert');
var multiplyArray = require('./');

it('should multiply all items in an array', function () {
	assert.equal(multiplyArray([2, 2, 4]), 16);
	assert.equal(multiplyArray([2, -2]), -4);
	assert.equal(multiplyArray([2, 0, 10]), 0);
});

it('should throw when there are not enough items', function () {
	assert.throws(function () {
		multiplyArray([2]);
	});

	assert.throws(function () {
		multiplyArray([]);
	});
});

it('should throw when not passing an array', function () {
	assert.throws(function () {
		multiplyArray('yoyo');
	});

	assert.throws(function () {
		multiplyArray({});
	});
});

it('should work when array has non-numbers', function () {
	assert.equal(multiplyArray([2, 2, 'bear', 4, 'food']), 16);
	assert.equal(multiplyArray([2, 'eats', -2]), -4);
});

it('should throw when not passing an array with enough numbers', function () {
	assert.throws(function () {
		multiplyArray(['yo', 'yoyo']);
	});

	assert.throws(function () {
		multiplyArray(['yo', 'yoyo', 3]);
	});
});
