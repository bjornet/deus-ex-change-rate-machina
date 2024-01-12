import { useEffect, useState } from "react";
import { Maybe } from "types/types";
import { storeManager } from "store";
import { PersistedStateKeys } from "store/enums";
import { useExchangeRates } from "context";
import { getExchangeRate } from "./actions";

/**
 * @todo Move this to the config layer: config file or env variables
 */
const SOURCE_CURRENCY_DEFAULT = "SEK";
const TARGET_CURRENCY_DEFAULT = "NOK";

export const useExchange = () => {
  const { rates } = useExchangeRates();

  const [exchangeRate, setExchangeRate] = useState<Maybe<number>>(null);
  const [amount, setAmount] = useState<number>(1);

  const [sourceCurrencySelected, setCurrencySelected] = useState<string>(
    SOURCE_CURRENCY_DEFAULT,
  );

  const [targetCurrencySelected, setTargetCurrencySelected] = useState<string>(
    TARGET_CURRENCY_DEFAULT,
  );

  /**
   * Update the exchange rate when the rates or the selected currencies change
   */
  useEffect(() => {
    if (!rates) return;

    const calculatedExchangeRate = getExchangeRate(
      rates[sourceCurrencySelected],
      rates[targetCurrencySelected],
    );

    setExchangeRate(calculatedExchangeRate);
  }, [rates, sourceCurrencySelected, targetCurrencySelected]);

  /**
   * Restore exchange values on mount
   * @note this should extracted to a custom hook
   */
  useEffect(() => {
    const storedAmount = storeManager.get(PersistedStateKeys.AMOUNT);

    const storedSourceCurrency = storeManager.get(
      PersistedStateKeys.CURRENCY_SELECTED_SOURCE,
    );

    const storedTargetCurrency = storeManager.get(
      PersistedStateKeys.CURRENCY_SELECTED_TARGET,
    );

    if (storedAmount) {
      setAmount(storedAmount);
    }

    if (storedSourceCurrency) {
      setCurrencySelected(storedSourceCurrency);
    }

    if (storedTargetCurrency) {
      setTargetCurrencySelected(storedTargetCurrency);
    }
  }, [exchangeRate]);

  return {
    exchangeRate,
    amount,
    setAmount,
    sourceCurrencySelected,
    setCurrencySelected,
    targetCurrencySelected,
    setTargetCurrencySelected,
  };
};
