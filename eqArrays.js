const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length){
    return false;
  } else {
    for (let x = 0; x < array1.length; x++){
      if (array1[x] !== array2[x]){
        return false;
      }
    }
  }
  return true;
}

module.exports = eqArrays;

//TEST CASES

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), true); // => should FAIL
// assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // => should FAIL
// assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS