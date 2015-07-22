# multiply-array [![Build Status](https://travis-ci.org/arthurvr/multiply-array.svg?branch=master)](https://travis-ci.org/arthurvr/multiply-array)

> Multiply all items in an array

Works when non-numbers are present as well.


## Install

```
$ npm install --save multiply-array
```


## Usage

```js
var multiplyArray = require('multiply-array');

multiplyArray([2, 2, 4]);
//=> 16

multiplyArray([2, 'bear', 2, 'food', 4]);
//=> 16
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
