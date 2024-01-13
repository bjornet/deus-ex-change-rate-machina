import { TargetCurrenciesReducer } from "./types";

export const targetCurrenciesReducer: TargetCurrenciesReducer = (
  state,
  action,
) => {
  // Remove a target currency
  if (action.type === "remove") {
    return state.filter((currency) => currency !== action.payload);
  }

  // Add a new target currency, if it doesn't already exist
  if (action.type === "add" && !state.includes(action.payload)) {
    return [...state, action.payload];
  }

  if (action.type !== "add" && action.type !== "remove") {
    throw new Error(
      `Invalid action type "${action.type}" passed to targetCurrenciesReducer`,
    );
  }

  return state;
};
