import { createTermDeposit } from ".";
import {
  COMPOUND_FREQUENCIES,
  COMPOUND_FREQUENCY_VALUES,
  TermDeposit,
  UnsafeInput,
} from "../types";

it("maps valid string input to term deposit type", () => {
  const rawInput: UnsafeInput = {
    principle: "10000",
    annualRate: "1.1",
    months: "36",
    compoundFrequency: "4",
  };

  const expectedResult: TermDeposit = {
    principle: 10000,
    annualRate: 0.011,
    months: 36,
    compoundFrequency:
      COMPOUND_FREQUENCY_VALUES[COMPOUND_FREQUENCIES.quarterly],
  };
  expect(createTermDeposit(rawInput)).toMatchObject(expectedResult);
});

it("throws error when passed invalid term deposit input", () => {
  const rawInput = {
    principle: undefined,
    annualRate: "1.1",
    months: "36",
    compoundFrequency: "4",
  } as unknown as UnsafeInput; // Intentionally overriding type check to provide invalid principle value

  const createInvalidTermDeposit = () => createTermDeposit(rawInput);

  expect(createInvalidTermDeposit).toThrow();
});
