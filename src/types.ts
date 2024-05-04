import { z } from "zod";

export enum FIELD_NAMES {
  principle = "principle",
  annualRate = "annualRate",
  months = "months",
  compoundFrequency = "compoundFrequency",
}

// interest paid at maturity doesn't compound, so don't include in this enum
export enum COMPOUND_FREQUENCIES {
  monthly = "monthly",
  quarterly = "quarterly",
  annually = "annually",
}

const COMPOUND_FREQUENCY_VALUES = {
  [COMPOUND_FREQUENCIES.monthly]: 12,
  [COMPOUND_FREQUENCIES.quarterly]: 4,
  [COMPOUND_FREQUENCIES.annually]: 1,
} as const;

const CompoundFrequencyEnum = z.nativeEnum(COMPOUND_FREQUENCY_VALUES);

export type CompoundFrequency = z.infer<typeof CompoundFrequencyEnum>;

const termDepositSchema = z.object({
  principle: z.number().positive(),
  annualRate: z.number().positive(),
  months: z.number().positive(),
  compoundFrequency: CompoundFrequencyEnum.optional(),
});

export type TermDepositSchema = z.infer<typeof termDepositSchema>;

export { termDepositSchema, COMPOUND_FREQUENCY_VALUES };
