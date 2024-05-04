import { validateMonths } from ".";

it.each`
  userInput          | result
  ${"twelve months"} | ${"Expected number, received nan"}
  ${"-4"}            | ${"Number must be greater than 0"}
  ${"3"}             | ${true}
  ${"3.5"}           | ${true}
`("returns $result when user input is $userInput", ({ userInput, result }) => {
  expect(validateMonths(userInput)).toBe(result);
});
