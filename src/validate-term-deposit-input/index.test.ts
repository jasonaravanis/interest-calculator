import { validateTermDepositInput } from ".";

const input = {
  principle: "10000",
  annualRate: "1.1",
  months: "36",
  compoundFrequency: "4",
};

it.each`
  principle          | annualRate          | months           | compoundFrequency          | description                         | result
  ${input.principle} | ${input.annualRate} | ${input.months}  | ${input.compoundFrequency} | ${"is valid"}                       | ${true}
  ${undefined}       | ${input.annualRate} | ${input.months}  | ${input.compoundFrequency} | ${"is missing principle"}           | ${false}
  ${input.principle} | ${undefined}        | ${input.months}  | ${input.compoundFrequency} | ${"is missing annual rate"}         | ${false}
  ${input.principle} | ${input.annualRate} | ${undefined}     | ${input.compoundFrequency} | ${"is missing months"}              | ${false}
  ${input.principle} | ${input.annualRate} | ${input.months}  | ${undefined}               | ${"is missing compound frequency"}  | ${false}
  ${"some string"}   | ${input.annualRate} | ${input.months}  | ${input.compoundFrequency} | ${"has invalid principle"}          | ${false}
  ${input.principle} | ${"3.5%"}           | ${input.months}  | ${input.compoundFrequency} | ${"has invalid annual rate"}        | ${false}
  ${input.principle} | ${input.annualRate} | ${"some string"} | ${input.compoundFrequency} | ${"has invalid months"}             | ${false}
  ${input.principle} | ${input.annualRate} | ${input.months}  | ${"7"}                     | ${"has invalid compound frequency"} | ${false}
`(
  "return $result when input $description",
  ({ principle, annualRate, months, compoundFrequency, result }) => {
    expect(
      validateTermDepositInput({
        principle,
        annualRate,
        months,
        compoundFrequency,
      })
    ).toBe(result);
  }
);
