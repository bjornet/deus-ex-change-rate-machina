import { describe, expect, it } from "vitest";

import { isNumber } from "./isNumber";

describe("isNumber", () => {
  it("should verify that 1 is a number", () => {
    expect(isNumber(1)).toBe(true);
  });

  it('should verify that "1" is not a number', () => {
    expect(isNumber("1")).toBe(false);
  });

  it("should verify that NaN is not a number", () => {
    expect(isNumber(NaN)).toBe(false);
  });

  it("should verify that undefined is not a number", () => {
    expect(isNumber(undefined)).toBe(false);
  });

  it("should verify that null is not a number", () => {
    expect(isNumber(null)).toBe(false);
  });

  it("should verify that true is not a number", () => {
    expect(isNumber(true)).toBe(false);
  });
});
