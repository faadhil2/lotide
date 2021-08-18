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


const letterPositions = function(sentence) {
  //let charArray = sentence.replace(/\s+/g, '').split('');
  let charArray = sentence.split('');
  const results = {};

  // Initialize the keys in results
  for (let x = 0; x < charArray.length; x++){
    if (charArray[x] !== ' '){
      results[charArray[x]] = [];
    }
  }
  // Assign values to keys in results
  for (let x = 0; x < charArray.length; x++){
    if (charArray[x] !== ' '){  
      results[charArray[x]].push(x);
    }
  };
  return results;
};


//TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]); // Pass
assertArraysEqual(letterPositions("hello").e, [2]); //Fail
assertArraysEqual(letterPositions("lighthouse in the house").e, [9,16,22]); //Pass
assertArraysEqual(letterPositions("lighthouse in the house").e, [1]); //Fail
//console.log(letterPositions("hello"));
//console.log(letterPositions("lighthouse in the house"));