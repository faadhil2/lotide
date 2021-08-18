const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string){
  let charArray = string.replace(/\s+/g, '').split('');
  let letterCount = {};

  for (let x = 0; x < charArray.length; x++){
      letterCount[charArray[x]] = 0;
    }
  for (let x = 0; x < charArray.length; x++){
      letterCount[charArray[x]] += 1;
  };
 return letterCount;
}


//TEST
console.log(countLetters("lighthouse in the house"));