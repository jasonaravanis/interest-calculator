import { roundNumber } from "../round-number";
import { TermDeposit, UnsafeInput } from "../types";
import { validateTermDepositInput } from "../validate-term-deposit-input";

const createTermDeposit = (input: UnsafeInput): TermDeposit => {
  /**
   * This function can process string input into a term deposit.
   * Because string input can come from anywhere (CLI, streamed
   * from a file etc) we cannot assume it has been validated
   */

  const valid = validateTermDepositInput(input);

  if (!valid) {
    throw new Error("Invalid input provided to term deposit generator!");
  }
  return {
    principle: Number(input.principle),
    annualRate: roundNumber(Number(input.annualRate) / 100),
    months: Number(input.months),
    compoundFrequency: Number(input.compoundFrequency),
  };
};

export { createTermDeposit };
