const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

assertEqual(eqObjects({person: "jim", age: 24}, {person: "jimmy", age: 23}), false); //Should fail

assertEqual(eqObjects({apple: 3, orange: 4, banana: 5}, {apple: 3, orange: 4, banana: 5}), true); //Should pass