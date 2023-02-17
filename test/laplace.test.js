// add.test.js
const assert = require("chai").assert;
const laplaceTransform = require("../functions/laplace");

describe("laplaceTransform", function () {
  it("should calculate the Laplace transform of t^2", function () {
    const f = (t) => t * t;
    const s = 1;
    const tMax = 10;
    const result = laplaceTransform(f, s, tMax);
    assert.approximately(result, 2 / Math.pow(s, 3), 0.01);
  });
});
