import { TermDeposit } from "../classes/term-deposit";
import { roundNumber } from "../round-number";

const getSimpleInterest = (deposit: TermDeposit): number => {
  const result = deposit.principle * (deposit.getYears() * deposit.annualRate);

  return roundNumber(result);
};

export { getSimpleInterest };
