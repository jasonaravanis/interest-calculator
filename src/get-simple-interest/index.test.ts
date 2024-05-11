import { getSimpleInterest } from ".";
import {
  COMPOUND_FREQUENCIES,
  COMPOUND_FREQUENCY_VALUES,
  type TermDeposit,
} from "../types";

it("does the thing", () => {
  const termDeposit: TermDeposit = {
    principle: 10000,
    months: 36,
    annualRate: 0.011,
    compoundFrequency: COMPOUND_FREQUENCY_VALUES[COMPOUND_FREQUENCIES.maturity],
  };
  expect(getSimpleInterest(termDeposit)).toBe(330);
});
