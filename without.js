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

const assertArraysEqual = function(array1, array2){
  let comparison = eqArrays(array1,array2);
  if (comparison === true){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }

}

const without = function(sourceArray, itemsToRemoveArray){
  let modifiedArray = sourceArray;

  for (let i = 0; i < sourceArray.length; i++){ //Iterate through source array
    for (let j = 0; j < itemsToRemoveArray.length; j++){ //Iterate through ItemstoRemoveArray
      if (sourceArray[i] === itemsToRemoveArray[j]){
        modifiedArray.splice(i,1);   
      }
    }
  }
  return modifiedArray;
}

module.exports = without;


//TESTING CODE
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// //console.log(without([1, 2, 3], [1])) // => [2, 3]
// //console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// //console.log(without([1, 2, 3], [2])) // => [1, 3]

// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); //Should Fail
// assertArraysEqual(words, ["hello", "world"]); //Should Pass
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);// Should Pass
// assertArraysEqual(without([1, 2, 3], [2]), [1]);// Should Fail