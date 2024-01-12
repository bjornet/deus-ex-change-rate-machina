/**
 * This is the formula for calculating the exchange rate between two currencies based on their USD relative rates
 * This is sub optimal and is not needed if I could use the /correncies endpoint instead
 * @param sourceUSDRelativeRate is the rate (relative to 1 USD) for the currency we want to convert from
 * @param targetUSDRelativeRate is the rate (relative to 1 USD) for the currency we want to convert to
 * @returns the exchange rate
 */
export const getExchangeRate = (
  sourceUSDRelativeRate: number,
  targetUSDRelativeRate: number,
) => (1 / sourceUSDRelativeRate) * targetUSDRelativeRate;
