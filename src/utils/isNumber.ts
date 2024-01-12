export const isNumber = (value: unknown): value is number =>
  typeof value === "number" &&
  typeof value !== "undefined" &&
  !Number.isNaN(value);
