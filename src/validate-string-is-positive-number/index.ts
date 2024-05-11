// Used for rendering useful error messages to user when recieving input via CLI
const validateStringIsPositiveNumber = (input: string): boolean | string => {
  if (typeof input !== "string") {
    return "Input is not a string";
  }
  // regex allows only digits, a single ".", and a single "-"
  // we allow "-" so we can use a more specific error message for negative numbers
  const regex = /^-?\d+(\.\d+)?$/;
  if (!regex.test(input)) {
    return "Input must not contain any special characters";
  }
  const inputAsNumber = Number(input);
  if (inputAsNumber <= 0) {
    return "Input must be greater than 0";
  }

  return true;
};

export { validateStringIsPositiveNumber };
