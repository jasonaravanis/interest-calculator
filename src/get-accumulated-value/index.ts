import type { TermDeposit } from "../types";
import { getCompoundInterest } from "../get-compound-interest";
import { getSimpleInterest } from "../get-simple-interest";

const getAccumulatedValue = (deposit: TermDeposit): number => {
  if (!deposit.compoundFrequency) {
    return deposit.principle + getSimpleInterest(deposit);
  } else {
    return deposit.principle + getCompoundInterest(deposit);
  }
};

export { getAccumulatedValue };
