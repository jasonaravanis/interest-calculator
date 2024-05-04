import { roundNumber } from "../round-number";
import {
  COMPOUND_FREQUENCIES,
  COMPOUND_FREQUENCY_VALUES,
  TermDepositSchema,
} from "../types";

type RawUserInput = {
  principle: string;
  annualRate: string;
  months: string;
  compoundFrequency: string;
};

const mapUserInput = (userInput: RawUserInput): TermDepositSchema => {
  return {
    principle: Number(userInput.principle),
    annualRate: roundNumber(Number(userInput.annualRate) / 100),
    months: Number(userInput.months),
    compoundFrequency:
      COMPOUND_FREQUENCY_VALUES[
        COMPOUND_FREQUENCIES[userInput.compoundFrequency]
      ],
  };
};

export { mapUserInput };
