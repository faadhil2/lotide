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



const takeUntil = function(array, callback) {
  // ...
  let results = new Array();

  for (let x = 0; x < array.length; x++){
    if (callback(array[x])){
      return results
    }else{
      results.push(array[x]);
    }
  }
    return results;
  };




//TESTING CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);


assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);