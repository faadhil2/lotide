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

