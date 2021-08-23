# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @faadhil2/lotide`

**Require it:**

`const _ = require('@faadhil2/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `head(array)` : Takes in an array parameter and returns the head of the array.
*  `tail(array)` : Takes in an array parameter and returns the tail of the array.
*  `middle(array)` : Takes in an array parameter and returns the middle element of the array.
*  `assertArraysEqual(array1, array2)` : Takes in two array parameters and asserts if they are equal.
*  `assertEqual(actual, expected)` : Takes in two values as parameters and asserts if they are equal.
*  `assertObjectsEqual(actual, expected)` : Takes in two object parameters and asserts if they are equal.
*  `countLetters(string)`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
*  `countOnly(array, object)` : Takes in an array and an object as parameters. It will return an object containing counts of everything that the input object listed.
*  `eqArrays(array1, array2)` : Takes in two arrays as parameters and returns true/false if they equal.
*  `eqObjects(object1, object2)` : Takes in two objects as paramters and returns true/false if they equal.
*  `findKey(object, callback)` : Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*  `findKeyByValue(object, string)` : Takes in an object and string as parameters. It returns the object's key which contains the value of the string parameter.
*  `letterPositions(string)` : Takes in a string as a parameter which will return all the indices (zero-based positions) in the string where each character is found.
*  `map(array, callback)` : Takes in an array and callback as paramters. It applies the callback to the array and returns the result.
*  `takeUntil(array, callback)` : Takes in an array and callback as parameters and returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
*  `without(array1, array2)` :  Takes in two arrays as parameters and will return a subset of a the first array, removing elements contained in the second array.
