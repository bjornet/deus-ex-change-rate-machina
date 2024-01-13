export type TargetCurrenciesAction = {
  type: "add" | "remove";
  payload: string;
};

export type TargetCurrenciesReducer = (
  state: string[],
  action: TargetCurrenciesAction,
) => string[];
