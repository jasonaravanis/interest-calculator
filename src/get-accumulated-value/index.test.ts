import { getAccumulatedValue } from ".";
import * as compound from "../get-compound-interest";
import * as simple from "../get-simple-interest";
import { TermDeposit } from "../classes/term-deposit";
import { COMPOUND_FREQUENCIES, COMPOUND_FREQUENCY_VALUES } from "../types";

beforeEach(() => {
  jest.resetAllMocks();
});

it.each`
  principle | annualRate | months | compoundFrequency                 | result
  ${10000}  | ${0.011}   | ${36}  | ${COMPOUND_FREQUENCIES.monthly}   | ${10335.34916}
  ${5000}   | ${0.0485}  | ${12}  | ${COMPOUND_FREQUENCIES.quarterly} | ${5246.94623}
`(
  "calculates correct accumulated value",
  ({ principle, annualRate, months, compoundFrequency, result }) => {
    const testDeposit = new TermDeposit({
      principle,
      months,
      annualRate,
      compoundFrequency: COMPOUND_FREQUENCY_VALUES[compoundFrequency],
    });
    expect(getAccumulatedValue(testDeposit)).toBe(result);
  }
);

it("uses simple interest calculator for deposit with interest paid at maturity", () => {
  const compoundSpy = jest.spyOn(compound, "getCompoundInterest");
  const simpleSpy = jest.spyOn(simple, "getSimpleInterest");

  const deposit = new TermDeposit({
    principle: 10000,
    annualRate: 0.011,
    months: 36,
  });

  getAccumulatedValue(deposit);
  expect(compoundSpy).not.toHaveBeenCalled();
  expect(simpleSpy).toHaveBeenCalled();
});

it.each(Object.keys(COMPOUND_FREQUENCIES))(
  "uses compound interest calculator for deposit with interest paid %s",
  (compoundFrequency) => {
    const compoundSpy = jest.spyOn(compound, "getCompoundInterest");
    const simpleSpy = jest.spyOn(simple, "getSimpleInterest");

    const deposit = new TermDeposit({
      principle: 10000,
      annualRate: 0.011,
      months: 36,
      compoundFrequency: COMPOUND_FREQUENCIES[compoundFrequency],
    });

    getAccumulatedValue(deposit);
    expect(compoundSpy).toHaveBeenCalled();
    expect(simpleSpy).not.toHaveBeenCalled();
  }
);
