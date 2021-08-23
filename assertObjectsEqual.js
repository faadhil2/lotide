const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  let value1 = Object.values(object1);
  let value2 = Object.values(object2);

  if (key1.length === key2.length){
    let state = false;
    for (let x = 0; x < key1.length; x++ ){
        if (key1.includes(key2[x])){
          let indexOfKey1 = key1.indexOf(key2[x]);
            if(value1[indexOfKey1] === value2[x]){
              state = true;
            } else{
              state = false
            }
        }
        return state;
    }
  }
  return false;
};


const assertObjectsEqual = function(actual,expected){
  let comparison = eqObjects(actual,expected);
  if (comparison === true){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
}

module.exports = assertObjectsEqual;



//TEST CASE

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// //assertObjectsEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// //assertObjectsEqual((ab, abc),; // => false

// assertObjectsEqual({person: "jim", age: 24}, {person: "jimmy", age: 23}); //Should fail

// assertObjectsEqual({apple: 3, orange: 4, banana: 5}, {apple: 3, orange: 4, banana: 5}); //Should pass