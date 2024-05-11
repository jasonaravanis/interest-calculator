import { COMPOUND_FREQUENCY_VALUES, FIELD_NAMES } from "../types";

type Validation = (input: string) => boolean;

type Validations = {
  [key in FIELD_NAMES]: Validation;
};

const stringIsPositiveNumber: Validation = (input: string) =>
  /^\d+(\.\d+)?$/.test(input);

const stringIsCompoundFrequency: Validation = (input: string) => {
  const inputAsNumber = Number.parseFloat(input);
  return Object.values(COMPOUND_FREQUENCY_VALUES).includes(inputAsNumber);
};

export const VALIDATIONS: Validations = {
  [FIELD_NAMES.principle]: stringIsPositiveNumber,
  [FIELD_NAMES.annualRate]: stringIsPositiveNumber,
  [FIELD_NAMES.months]: stringIsPositiveNumber,
  [FIELD_NAMES.compoundFrequency]: stringIsCompoundFrequency,
};
