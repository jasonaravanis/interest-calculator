export enum FIELD_NAMES {
  principle = "principle",
  annualRate = "annualRate",
  months = "months",
  compoundFrequency = "compoundFrequency",
}

export enum COMPOUND_FREQUENCIES {
  monthly = "monthly",
  quarterly = "quarterly",
  annually = "annually",
  maturity = "maturity",
}

const COMPOUND_FREQUENCY_VALUES = {
  [COMPOUND_FREQUENCIES.monthly]: 12,
  [COMPOUND_FREQUENCIES.quarterly]: 4,
  [COMPOUND_FREQUENCIES.annually]: 1,
  [COMPOUND_FREQUENCIES.maturity]: 0,
} as const;

export type CompoundFrequency =
  (typeof COMPOUND_FREQUENCY_VALUES)[COMPOUND_FREQUENCIES];

export type TermDeposit = {
  principle: number;
  annualRate: number;
  months: number;
  compoundFrequency: CompoundFrequency;
};

export { COMPOUND_FREQUENCY_VALUES };
