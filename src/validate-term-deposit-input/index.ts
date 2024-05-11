import { FIELD_NAMES, UnsafeInput } from "../types";
import { VALIDATIONS } from "./validations";

/**
 * This function takes all input as unvalidated strings.
 * It ensures each string is valid for its field before it is used to
 * create a term deposit.
 */

const validateTermDepositInput = (input: UnsafeInput): boolean => {
  const validationResults = {};

  Object.values(FIELD_NAMES).forEach((fieldName) => {
    const fieldValue = input[fieldName];
    if (fieldValue === undefined) {
      validationResults[fieldName] = false;
      return;
    }
    const validator = VALIDATIONS[fieldName];
    validationResults[fieldName] = validator(fieldValue);
  });

  return Object.values(validationResults).every((v) => v);
};

export { validateTermDepositInput };
