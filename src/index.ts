import { input, select } from "@inquirer/prompts";
import { TermDeposit } from "./classes/term-deposit";
import { COMPOUND_FREQUENCIES, FIELD_NAMES, termDepositSchema } from "./types";
import { getAccumulatedValue } from "./get-accumulated-value";
import { mapUserInput } from "./map-user-input";

const app = async () => {
  const userInput = {
    [FIELD_NAMES.principle]: await input({
      message: "What is your starting amount?",
      default: "10000",
    }),
    [FIELD_NAMES.annualRate]: await input({
      message: "What is your interest rate (% per annum)?",
      default: "3.5",
    }),
    [FIELD_NAMES.months]: await input({
      message: "How many months will this term deposit last?",
      default: "12",
    }),
    [FIELD_NAMES.compoundFrequency]: await select({
      message: "How often should interest compound?",
      choices: [
        {
          name: "monthly",
          value: COMPOUND_FREQUENCIES.monthly,
          description: "Interest will compound 12 times per year.",
        },
        {
          name: "quarterly",
          value: COMPOUND_FREQUENCIES.quarterly,
          description: "Interest will compound 4 times per year.",
        },
        {
          name: "annually",
          value: COMPOUND_FREQUENCIES.annually,
          description: "Interest will compound once per year.",
        },
        {
          name: "at maturity",
          value: "maturity",
          description: "Interest will not compound.",
        },
      ],
    }),
  };

  const mappedUserInput = mapUserInput(userInput);

  const validationResult = termDepositSchema.safeParse(mappedUserInput);

  if (!validationResult.success) {
    console.log("Sorry, something went wrong!");
    console.log(validationResult.error);
    return;
  }

  const termDeposit = new TermDeposit(validationResult.data);

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
