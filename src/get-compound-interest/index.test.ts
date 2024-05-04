import { getCompoundInterest } from ".";
import { TermDeposit } from "../classes/term-deposit";
import { COMPOUND_FREQUENCIES, COMPOUND_FREQUENCY_VALUES } from "../types";

it.each`
  principle | annualRate | months | compoundFrequency                 | result
  ${10000}  | ${0.011}   | ${36}  | ${COMPOUND_FREQUENCIES.monthly}   | ${335.34916}
  ${5000}   | ${0.0485}  | ${12}  | ${COMPOUND_FREQUENCIES.quarterly} | ${246.94623}
`(
  "calculates correct compound interest",
  ({ principle, annualRate, months, compoundFrequency, result }) => {
    const testDeposit = new TermDeposit({
      principle,
      months,
      annualRate,
      compoundFrequency: COMPOUND_FREQUENCY_VALUES[compoundFrequency],
    });
    expect(getCompoundInterest(testDeposit)).toBe(result);
  }
);
