import test from 'ava';
import multiplyArray from './';

test('should multiply all items in an array', t => {
	t.is(multiplyArray([2, 2, 4]), 16);
	t.is(multiplyArray([2, -2]), -4);
	t.is(multiplyArray([2, 0, 10]), 0);

	t.end();
});

test('should throw when there are not enough items', t => {
	t.throws(() => {
		multiplyArray([2]);
	});

	t.throws(() => {
		multiplyArray([]);
	});

	t.end();
});

test('should throw when not passing an array', t => {
	t.throws(() => {
		multiplyArray('yoyo');
	});

	t.throws(() => {
		multiplyArray({});
	});

	t.end();
});
