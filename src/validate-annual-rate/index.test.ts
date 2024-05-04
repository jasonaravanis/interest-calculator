import { validateAnnualRate } from ".";

it.each`
  userInput | result
  ${"3.5%"} | ${"Expected number, received nan"}
  ${"-3.5"} | ${"Number must be greater than 0"}
  ${"3"}    | ${true}
  ${"3.5"}  | ${true}
`("returns $result when user input is $userInput", ({ userInput, result }) => {
  expect(validateAnnualRate(userInput)).toBe(result);
});
