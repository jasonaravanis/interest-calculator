import { validatePrinciple } from ".";

it.each`
  userInput    | result
  ${"$1250"}   | ${"Expected number, received nan"}
  ${"-1250"}   | ${"Number must be greater than 0"}
  ${"1250"}    | ${true}
  ${"1250.50"} | ${true}
`("returns $result when user input is $userInput", ({ userInput, result }) => {
  expect(validatePrinciple(userInput)).toBe(result);
});
