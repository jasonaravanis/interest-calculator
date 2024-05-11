import type { TermDeposit } from "../types";
import { getYears } from "../get-years";
import { roundNumber } from "../round-number";

const getCompoundInterest = (deposit: TermDeposit): number => {
  const compoundCount = deposit.compoundFrequency * getYears(deposit.months);
  const monthlyAnnualisedInterestRate =
    deposit.annualRate / deposit.compoundFrequency;

  const accumulatedValue =
    deposit.principle *
    Math.pow(1 + monthlyAnnualisedInterestRate, compoundCount);

  return roundNumber(accumulatedValue - deposit.principle);
};

export { getCompoundInterest };
