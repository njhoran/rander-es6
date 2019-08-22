'use strict';

const STRING_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqstrtuvwxyz';
const DIGITS = '0123456789';

const dice    = max => Math.floor( Math.random() * (max + 1) );
const between = (min, max) => min + dice(max - min);
const element = arr => arr[ dice(arr.length - 1) ];
const key     = obj => element( Object.keys(obj) );
const value   = obj => obj[ key(obj) ];
const pickup  = (dictionary, len = 1) => !dictionary ? string() : _generateString( dictionary, _generateRandomPositions(len, dictionary.length) );
const string  = (len = 8) => pickup(STRING_CHARS, len);
const number  = (len = 8) => pickup(DIGITS, len);

const _generateString = (dictionary, randomPositions) => randomPositions.map(pos => dictionary.charAt(pos)).join('');
const _generateRandomPositions = (stringLen, dictionaryLen) => [...Array(stringLen).keys()].map( () => dice(dictionaryLen - 1) );

module.exports = {
	string,
	number,
	pickup,
	dice,
	between,
	element,
	key,
	value,
	ele: element,
	val: value
};
