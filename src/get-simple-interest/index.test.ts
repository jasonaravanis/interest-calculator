import { getSimpleInterest } from ".";
import { TermDeposit } from "../classes/term-deposit";

it("calculates correct simple interest", () => {
  const termDeposit = new TermDeposit({
    principle: 10000,
    months: 36,
    annualRate: 0.011,
  });
  expect(getSimpleInterest(termDeposit)).toBe(330);
});
