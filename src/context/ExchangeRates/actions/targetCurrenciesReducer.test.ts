import { describe, expect, it } from "vitest";

import { targetCurrenciesReducer } from "./targetCurrenciesReducer";

const state = ["USD", "NOK", "EUR"];

describe("reducerTargetCurrencies", () => {
  it("should remove a target currency and return the remainder", () => {
    const action = {
      type: "remove",
      payload: "USD",
    } as const;

    expect(targetCurrenciesReducer(state, action)).toEqual(["NOK", "EUR"]);
  });

  it("should add a new target currency, if it doesn't already exist", () => {
    const action = {
      type: "add",
      payload: "GBP",
    } as const;

    expect(targetCurrenciesReducer(state, action)).toEqual([
      "USD",
      "NOK",
      "EUR",
      "GBP",
    ]);
  });

  it("should not add a new target currency if it already exists", () => {
    const action = {
      type: "add",
      payload: "NOK",
    } as const;

    expect(targetCurrenciesReducer(state, action)).toEqual([
      "USD",
      "NOK",
      "EUR",
    ]);
  });

  it("should throw an error if an invalid action type is passed", () => {
    const action = {
      type: "invalid",
      payload: "NOK",
    } as const;

    expect(() =>
      targetCurrenciesReducer(state, action as unknown as never),
    ).toThrow(
      `Invalid action type "invalid" passed to targetCurrenciesReducer`,
    );
  });
});
