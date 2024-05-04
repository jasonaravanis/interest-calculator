import { z } from "zod";
import { FIELD_NAMES, termDepositSchema } from "../types";

const validateAnnualRate = (value: string) => {
  const validationResult = z
    .string()
    .transform((v) => Number(v))
    .pipe(termDepositSchema.shape[FIELD_NAMES.annualRate])
    .safeParse(value);

  if (!validationResult.success) {
    return validationResult.error.issues[0].message;
  }

  return true;
};
export { validateAnnualRate };
