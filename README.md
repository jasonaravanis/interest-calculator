# Interest Calculator 🤑

A tool designed to calculate interest rates for term deposits using simple and compound formulas.

## System Requirements

- Node.js [18.12](https://nodejs.org/en/download) or later
- [pnpm](https://pnpm.io/installation#using-npm) package manager (with Node installed, you can install pnpm via `npm install -g pnpm`)

## Installation

Clone the project

```bash
  git clone git@github.com:jasonaravanis/interest-calculator.git
```

Go to the project directory

```bash
  cd interest-calculator
```

Install dependencies

```bash
  pnpm install
```

Build and run

```bash
  pnpm prod
```

## Commands

- `test`: Runs Jest in watch mode for continuous testing.
- `dev`: Starts the development server with Nodemon.
- `build`: Compiles TypeScript files to JavaScript in `dist` directory.
- `prod`: Builds the project and starts the application in production mode.

## Tech Stack

### Dependencies:

- [@inquirer/prompts](https://www.npmjs.com/package/inquirer): Interactive command-line user interface.
- [zod](https://zod.dev): Schema validation for TypeScript.

### Dev Dependencies:

- [@types/jest](https://www.npmjs.com/package/@types/jest): TypeScript definitions for Jest.
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js.
- [jest](https://jestjs.io): Testing framework.
- [nodemon](https://nodemon.io): Server for development environment.
- [ts-jest](https://www.npmjs.com/package/ts-jest): TypeScript preprocessor for Jest.
- [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution environment and REPL for Node.js
- [typescript](https://www.typescriptlang.org): TypeScript compiler.

## License

[MIT](https://choosealicense.com/licenses/mit/)
