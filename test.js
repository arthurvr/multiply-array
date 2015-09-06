'use strict';
var test = require('ava');
var multiplyArray = require('./');

test('should multiply all items in an array', function (t) {
	t.is(multiplyArray([2, 2, 4]), 16);
	t.is(multiplyArray([2, -2]), -4);
	t.is(multiplyArray([2, 0, 10]), 0);

	t.end();
});

test('should throw when there are not enough items', function (t) {
	t.throws(function () {
		multiplyArray([2]);
	});

	t.throws(function () {
		multiplyArray([]);
	});

	t.end();
});

test('should throw when not passing an array', function (t) {
	t.throws(function () {
		multiplyArray('yoyo');
	});

	t.throws(function () {
		multiplyArray({});
	});

	t.end();
});
