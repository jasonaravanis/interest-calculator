import { DECIMAL_PRECISION } from "../settings";

const roundNumber = (number: number) => {
  return parseFloat(number.toFixed(DECIMAL_PRECISION));
};
export { roundNumber };
