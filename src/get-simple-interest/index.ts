import type { TermDeposit } from "../types";
import { roundNumber } from "../round-number";
import { getYears } from "../get-years";

const getSimpleInterest = (deposit: TermDeposit): number => {
  const result =
    deposit.principle * (getYears(deposit.months) * deposit.annualRate);

  return roundNumber(result);
};

export { getSimpleInterest };
