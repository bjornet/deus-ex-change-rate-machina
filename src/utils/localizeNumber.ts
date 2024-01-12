import { isNumber } from "./isNumber";

type LocalizeNumber = (
  locale: string | "en" | "sv",
  currency: string,
  value: number,
  style?: "decimal" | "currency" | "percent",
  decimalsLimit?: number,
  notation?: "compact" | "standard",
) => string;

export const localizeNumber: LocalizeNumber = (
  locale,
  currency,
  value,
  style = "decimal",
  decimalsLimit = 2,
  notation = "standard",
) => {
  if (!isNumber(value)) return "N/A";

  return new Intl.NumberFormat(locale, {
    style,
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: decimalsLimit,
    notation,
    compactDisplay: "short",
    unitDisplay: "short",
  }).format(value);
};
