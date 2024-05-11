import { getYears } from ".";

it("converts months to years", () => {
  expect(getYears(12)).toBe(1);
  expect(getYears(18)).toBe(1.5);
});

it("throws if months is negative", () => {
  const getNegativeYears = () => getYears(-12);
  expect(getNegativeYears).toThrow();
});
