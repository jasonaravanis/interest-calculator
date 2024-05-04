import { TermDeposit } from ".";
import { COMPOUND_FREQUENCIES, COMPOUND_FREQUENCY_VALUES } from "../../types";

it("gets period in years", () => {
  const termDeposit = new TermDeposit({
    principle: 10000,
    annualRate: 0.011,
    months: 36,
    compoundFrequency: COMPOUND_FREQUENCY_VALUES[COMPOUND_FREQUENCIES.monthly],
  });
  expect(termDeposit.getYears()).toBe(3);
});
