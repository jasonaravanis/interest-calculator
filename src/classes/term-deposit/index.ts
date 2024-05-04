import { CompoundFrequency, TermDepositSchema } from "../../types";

class TermDeposit {
  principle: number;
  annualRate: number;
  months: number;
  compoundFrequency?: CompoundFrequency;

  constructor(input: TermDepositSchema) {
    (this.principle = input.principle),
      (this.annualRate = input.annualRate),
      (this.months = input.months),
      (this.compoundFrequency = input.compoundFrequency ?? null);
  }

  getYears(): number {
    return this.months / 12;
  }
}

export { TermDeposit };
