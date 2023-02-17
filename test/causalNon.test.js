// Define some test cases
const isCausalSystem = require("../functions/causalNon");

test("returns true for a causal system", () => {
  const input = [1, 2, 3, 4];
  const expectedOutput = true;
  const actualOutput = isCausalSystem(input);
  expect(actualOutput).toBe(expectedOutput);
});

test("returns false for a non-causal system", () => {
  const input = [4, 3, 2, 1];
  const expectedOutput = false;
  const actualOutput = isCausalSystem(input);
  expect(actualOutput).toBe(expectedOutput);
});
