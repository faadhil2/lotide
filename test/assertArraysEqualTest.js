const assertArraysEqual = require('../assertArraysEqual');
const eqArrays= require('../eqArrays');

assertArraysEqual(["Lighthouse Labs"], ["Bootcamp"]);
assertArraysEqual(["Lighthouse Labs"],["Lighthouse Labs"]);
assertArraysEqual([1], [1]);
assertArraysEqual([1],[2]);