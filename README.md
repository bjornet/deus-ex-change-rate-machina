# Exchange Rate

A barebone exchange rate calculator.

## Description

This is a simple exchange rate calculator that uses the [ExchangeRate-API](https://www.exchangerate-api.com/) to get the latest exchange rates for the selected currencies.

## Technologies

- [ExchangeRate-API](https://www.exchangerate-api.com/) for exchange rates
- [Vite](https://vitejs.dev/) for bundling and development
- [TypeScript](https://www.typescriptlang.org/) for enhanced DX through type safety and intellisense
- [React](https://reactjs.org/) for the UI
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Eslint](https://eslint.org/) for linting
- [Prettier](https://prettier.io/) for code formatting
- [Vitest](https://vitest.dev/) for unit testing

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

### Unit Testing

Run `pnpm test` to run and watch unit tests via Vitest.

### Linting and Formatting
Linting: Run `pnpm lint` to identify and fix linting issues.
Formatting: Run `pnpm format` to format your code using Prettier.

## Building

### Production Build

Run `pnpm build` to build the app for production to the dist folder.

## Improvements

1. **Component Development** A great improvment to the component development would be to add [Storybook Docs](https://storybook.js.org/docs/react/writing-docs/introduction) to the project. This would allow us to document and develop components in isolation. This is ivaluable when working in a team.
2. **Stability** The codebase would gain a lot from adding a pre-commit hook that runs a baseline of tests and linting. This would ensure that the codebase is stable and consistent. Husky and lint-staged would be a great fit for this.
3. **Error Handling** The app is missing error handling. This is a must for a production ready app. The app should handle errors from the API and display a user friendly error message.
4. **Accessibility** The app is missing accessibility features. This is a must for a production ready app. The app should be accessible for all users.
5. **Performance** The API does not have to be called again upon page refresh. The app could store the exchange rates in local storage (with a timestamp) and use them on page refresh. This would improve the performance of the app.
