const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



assertArraysEqual(middle([1]), []); //Should Pass
assertArraysEqual(middle([1]), [1]); //SHould Fail
assertArraysEqual(middle([1,2]), []); //Should Pass
assertArraysEqual(middle([1,2]), [1]); // Should Fail
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]); // Should Pass
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]); // Should Pass
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4,5]); // Should Fail