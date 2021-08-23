//Compares 2 arrays and returns true/false if they're identical.
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

// Receives 2 arrays as input and outputes a console.log message if they're equal or not.
const assertArraysEqual = function(array1, array2){
  let comparison = eqArrays(array1,array2);
  if (comparison === true){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }

}

const middle = function(array){
  let middleArray = new Array();

  if (array.length <= 2){
    return middleArray;
  } else if (array.length % 2 != 0){
      middleArray.push(array[(array.length -1) / 2]);
      return middleArray;
  } else {
      middleArray.push(array[((array.length / 2) -1)]);
      middleArray.push(array[((array.length / 2))]);
      return middleArray;
  }

}

module.exports = middle;

// TEST CODE
// assertArraysEqual(middle([1]), []); //Should Pass
// assertArraysEqual(middle([1]), [1]); //SHould Fail
// assertArraysEqual(middle([1,2]), []); //Should Pass
// assertArraysEqual(middle([1,2]), [1]); // Should Fail
// assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]); // Should Pass
// assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]); // Should Pass
// assertArraysEqual(middle([1,2,3,4,5,6,7]), [4,5]); // Should Fail



// console.log(middle([1]))
// console.log(middle([1,2]))
// console.log(middle([1,2,3]))
// console.log(middle([1,2,3,4]))
// console.log(middle([1,2,3,4,5,6,7]))
