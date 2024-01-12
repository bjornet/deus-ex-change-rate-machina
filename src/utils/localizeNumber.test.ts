import { describe, it, expect } from "vitest";

import { localizeNumber } from "./localizeNumber";

describe("localizeNumber", () => {
  const locale = "sv";
  const currency = "SEK";

  it("should return N/A as string if value is not a number", () => {
    expect(localizeNumber(locale, currency, null as never)).toBe("N/A");
    expect(localizeNumber(locale, currency, undefined as never)).toBe("N/A");
    expect(localizeNumber(locale, currency, "test" as never)).toBe("N/A");
  });

  it("should return sv localized number as string defaulting to two decimals", () => {
    expect(localizeNumber(locale, currency, 123.456)).toBe("123,46");
  });

  it("should return sv localized number as string with one decimal", () => {
    expect(localizeNumber(locale, currency, 123.456, "decimal", 1)).toBe(
      "123,5",
    );
  });

  it("should return sv localized number with currency symbol", () => {
    expect(localizeNumber(locale, currency, 123.456, "currency")).toBe(
      "123,46 kr",
    );
  });

  it("should return sv localized number with percent symbol", () => {
    expect(localizeNumber(locale, currency, 11.525, "percent")).toBe(
      "1 152,5 %",
    );
    expect(localizeNumber(locale, currency, 0.252, "percent", 1)).toBe(
      "25,2 %",
    );
  });

  it("should return a dollar sign when currency is set to USD", () => {
    expect(localizeNumber("en", "USD", 123.456, "currency")).toBe("$123.46");
  });
});
