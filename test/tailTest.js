const assert = require('chai').assert;
const tail = require('../tail');


describe("#head", () => {
  it("Original array should have 3 elements", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);

    assert.strictEqual(words.length, 3);
  });
  it('Return true if tail(["Yo Yo", "Lighthouse", "Labs"]) equals ["Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);

    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});

