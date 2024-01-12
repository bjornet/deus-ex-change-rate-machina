# Exchange Rate

A barebone exchange rate calculator.

## Description

This is a simple exchange rate calculator that uses the [ExchangeRate-API](https://www.exchangerate-api.com/) to get the latest exchange rates for the selected currencies.

## Technologies

- [Vite](https://vitejs.dev/) for bundling and development
- [TypeScript](https://www.typescriptlang.org/) for enhanced DX through type safety and intellisense
- [ExchangeRate-API](https://www.exchangerate-api.com/) for exchange rates
- [React](https://reactjs.org/) for the UI
- [Storybook](https://storybook.js.org/) for component development
- [Vitest](https://vitest.dev/) for unit testing
- [Eslint](https://eslint.org/) for linting
- [Prettier](https://prettier.io/) for code formatting
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.18.0 or higher)

## Installation

### 1. Clone the repository

```sh
git clone https://github.com:bjornet/exchange-rates.git
cd exchange-rates
```

### 2. Install dependencies

```sh
pnpm install
```

## Development

**IMPORTANT!** This app is not ready for production. There is no secure way to add API secrets to the app. Therefore you will have to:
1. Copy the `UNSECURE_secrets.ts.sample` file and name it `UNSECURE_secrets.ts` (*for security reasons it is ignored, it must never be versioned*)
2. Add your API key to `UNSECURE_secrets.ts`

Yey, now you can run the app locally!

### Start the development server

Run `pnpm dev` to start the development server.

### Components

Run `pnpm storybook` to start the storybook server. From here you can develop and test UI components in isolation.

### Unit Testing

Run `pnpm test` to run and watch unit tests.

### Linting and Formatting
Linting: Run `pnpm lint` to identify and fix linting issues.
Formatting: Run `pnpm format` to format your code using Prettier.

## Building

### Production Build

Run `pnpm build` to build the app for production to the dist folder.
