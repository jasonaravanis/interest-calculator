import { input, select } from "@inquirer/prompts";
import {
  COMPOUND_FREQUENCIES,
  COMPOUND_FREQUENCY_VALUES,
  FIELD_NAMES,
} from "./types";
import { getAccumulatedValue } from "./get-accumulated-value";
import { createTermDeposit } from "./create-term-deposit";
import { validateStringIsPositiveNumber } from "./validate-string-is-positive-number";

const app = async () => {
  const userInput = {
    [FIELD_NAMES.principle]: await input({
      message: "What is your starting amount?",
      default: "10000",
      validate: validateStringIsPositiveNumber,
    }),
    [FIELD_NAMES.annualRate]: await input({
      message: "What is your interest rate (% per annum)?",
      default: "3.5",
      validate: validateStringIsPositiveNumber,
    }),
    [FIELD_NAMES.months]: await input({
      message: "How many months will this term deposit last?",
      default: "12",
      validate: validateStringIsPositiveNumber,
    }),
    [FIELD_NAMES.compoundFrequency]: await select({
      message: "How often should interest compound?",
      choices: [
        {
          name: COMPOUND_FREQUENCIES.monthly,
          value: String(
            COMPOUND_FREQUENCY_VALUES[COMPOUND_FREQUENCIES.monthly]
          ),
          description: "Interest will compound 12 times per year.",
        },
        {
          name: COMPOUND_FREQUENCIES.quarterly,
          value: String(
            COMPOUND_FREQUENCY_VALUES[COMPOUND_FREQUENCIES.quarterly]
          ),
          description: "Interest will compound 4 times per year.",
        },
        {
          name: COMPOUND_FREQUENCIES.annually,
          value: String(
            COMPOUND_FREQUENCY_VALUES[COMPOUND_FREQUENCIES.annually]
          ),
          description: "Interest will compound once per year.",
        },
        {
          name: COMPOUND_FREQUENCIES.maturity,
          value: String(
            COMPOUND_FREQUENCY_VALUES[COMPOUND_FREQUENCIES.maturity]
          ),
          description: "Interest will not compound.",
        },
      ],
    }),
  };

  const termDeposit = createTermDeposit(userInput);

  const value = getAccumulatedValue(termDeposit);

  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  });

  console.log(
    `\nYour term deposit will be worth ${formatter.format(value)} after ${
      termDeposit.months
    } months`
  );

  console.log("\nGoodbye.\n");
};

app();
