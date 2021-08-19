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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback){
 
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }

  return results;

};


//TESTING CODE
let results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t']); //Should Pass

results1 = map(["Light", "House", "Labs"],word => word[0] )
assertArraysEqual(results1, ['l','h','l']); // Should Fail

results1 = map(["Light", "House", "Labs"],word => word[0] )
assertArraysEqual(results1, ['L','H','L']); // Should Pass