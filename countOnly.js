const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount){
  let returnObj = {}; //Return this value.
  
  for (let keys in itemsToCount){
    let booleanValue = itemsToCount[keys];
  
    if (booleanValue === true && allItems.includes(keys)){
      returnObj[keys] = 0;
    }
  }
  let returnObjKeys = Object.keys(returnObj); //Stores the keys of return Obj

  for (let x = 0; x < allItems.length; x++){
    if (returnObjKeys.includes(allItems[x])){
      returnObj[allItems[x]] += 1;
    }
  }
    return returnObj;

}



//Test Code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);