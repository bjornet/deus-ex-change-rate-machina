import {
  SOURCE_CURRENCY_DEFAULT,
  TARGET_CURRENCY_DEFAULT,
} from "context/ExchangeRates/ExchangeRates";
import { useState } from "react";
import { storeManager } from "store";
import { StoreSegments } from "store/enums";

/**
 * @note I realize now that most of this state can and should be handled by the context layer.
 * - it might be that I'm overusing the context layer relative to let the components manage more. This is a tradeoff
 * and I'm far from sure what is the best balance.
 * - I'm leaving it like this for now, but I would refactor this later and by doing so I expect less code and complexity. WIN!
 */

/**
 * Restore exchange values on mount
 */
const storedSourceCurrency = storeManager.get(
  StoreSegments.CURRENCY_SELECTED_SOURCE,
);

const storedTargetCurrency = storeManager.get(
  StoreSegments.CURRENCY_SELECTED_TARGET,
);

export const useExchange = () => {
  const [amount, setAmount] = useState<number>(1);

  const [sourceCurrencySelected, setCurrencySelected] = useState<string>(
    storedSourceCurrency || SOURCE_CURRENCY_DEFAULT,
  );

  const [targetCurrencySelected, setTargetCurrencySelected] = useState<string>(
    storedTargetCurrency || TARGET_CURRENCY_DEFAULT,
  );

  return {
    amount,
    setAmount,
    sourceCurrencySelected,
    setCurrencySelected,
    targetCurrencySelected,
    setTargetCurrencySelected,
  };
};
