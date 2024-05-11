import { validateStringIsPositiveNumber } from ".";

it.each`
  userInput    | result
  ${"$1250"}   | ${"Input must not contain any special characters"}
  ${"12%"}     | ${"Input must not contain any special characters"}
  ${"-1250"}   | ${"Input must be greater than 0"}
  ${"0"}       | ${"Input must be greater than 0"}
  ${"1250"}    | ${true}
  ${"1250.50"} | ${true}
  ${"1.3.3.7"} | ${"Input must not contain any special characters"}
`("returns $result when user input is $userInput", ({ userInput, result }) => {
  expect(validateStringIsPositiveNumber(userInput)).toBe(result);
});
