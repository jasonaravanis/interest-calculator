import { mapUserInput } from ".";
import { COMPOUND_FREQUENCIES, COMPOUND_FREQUENCY_VALUES } from "../types";

it("maps valid but raw user input to zod type", () => {
  const rawInput = {
    principle: "10000",
    annualRate: "1.1",
    months: "36",
    compoundFrequency: "monthly",
  };
  expect(mapUserInput(rawInput)).toMatchObject({
    principle: 10000,
    annualRate: 0.011,
    months: 36,
    compoundFrequency: COMPOUND_FREQUENCY_VALUES[COMPOUND_FREQUENCIES.monthly],
  });
});
