# Deus ex-Change Rate Machina

Exchange rates made easy!

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
git clone https://github.com/bjornet/deus-ex-change-rate-machina.git
cd deus-ex-change-rate-machina
```

### 2. Install dependencies

```sh
pnpm install
```

## Development

**IMPORTANT!** This app is not ready for production. There is no secure way to add API secrets to the app as of now. Anyhow, to develop and try out the app locally you do the following:
1. Copy the `.env.sample` file and name it `.env.local`
2. Add your personal API key (App ID) to the `.env.local` file

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

### Preview Production Build

Run `pnpm preview` to try out the production build locally.
Please note that this is not a production server. It is only intended for previewing the production build locally.

## Improvements

1. **Component Development** A great improvment to the component development would be to add [Storybook Docs](https://storybook.js.org/docs/react/writing-docs/introduction) to the project. This would allow us to document and develop components in isolation. This is ivaluable when working in a team.
2. **Stability** The codebase would gain a lot from adding a pre-commit hook that runs a baseline of tests and linting. This would ensure that the codebase is stable and consistent. Husky and lint-staged would be a great fit for this.
3. **Error Handling** The app is missing error handling. This is a must for a production ready app. The app should handle errors from the API and display a user friendly error message.
4. **Accessibility** The app is missing accessibility features. This is a must for a production ready app. The app should be accessible for all users.
5. **Performance** The API does not have to be called again upon page refresh. The app could store the exchange rates in local storage (with a timestamp) and use them on page refresh. This would improve the performance of the app.
6. **UI Feedback** The UX would gain a lot from adding better feedback on interaction. For example, when the user removes a currency from the list it can be hard for the user to understand what really updated in the UI since other currencies might shift over "to quickly". Simple yet well crafted animations takes us a long way here.
7. **index.html** The index.html file is located in the root folder. I kept it here since I could not get Vite to read env files (located in the root) in any other way. I expect the env file to be read from the root folder. This is not a big issue, but it would be nice to have the index.html file in the public folder (or possibly in src) instead.

## Known incomplete features

**Development of exchange rates over time** I bumped in to restrictions with the free API tier, over and over again. This could have been eleviated by either
- using a paid API key
- or temporary mocking the answer from the API in frontend

My prefered way to mock this would have been by using Storybook and possible Mock Service Worker. I have added notes in the code where I would have implemented this feature and some reasoning around it.
