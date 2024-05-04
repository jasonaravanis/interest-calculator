import { roundNumber } from ".";

// Floating point math :) https://0.30000000000000004.com
it("rounds a number", () => {
  expect(roundNumber(0.011000000000000001)).toBe(0.011);
});
