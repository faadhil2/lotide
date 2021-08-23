const assert = require('chai').assert;
const middle = require('../middle');


describe("#head", () => {
  it("If there is only one element, it should return an empty array", () => {
    assert.deepEqual(middle([1]), []);
  });
  it('The the array has an odd length, it should return the middle element', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]), [4]);
  });
  it('The the array has an even length, it should return the middle 2 elements', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});
