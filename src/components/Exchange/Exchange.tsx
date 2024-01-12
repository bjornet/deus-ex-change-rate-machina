import { storeManager } from "store";
import { ChangeEvent } from "react";
import { PersistedStateKeys } from "store/enums";
import { Select } from "components/Select";
import { Input } from "components/Input";
import { Result } from "components/Result";
import { useExchangeRates } from "context";
import { useExchange } from "./useExchange";

const Exchange = () => {
  const { currencies } = useExchangeRates();

  const {
    exchangeRate,
    amount,
    setAmount,
    sourceCurrencySelected,
    setCurrencySelected,
    targetCurrencySelected,
    setTargetCurrencySelected,
  } = useExchange();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    storeManager.set(PersistedStateKeys.AMOUNT, Number(e.target.value));

    setAmount(Number(e.target.value));
  };

  const handleSourceCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    storeManager.set(
      PersistedStateKeys.CURRENCY_SELECTED_SOURCE,
      e.target.value,
    );

    setCurrencySelected(e.target.value);
  };

  const handleTargetCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    storeManager.set(
      PersistedStateKeys.CURRENCY_SELECTED_TARGET,
      e.target.value,
    );

    setTargetCurrencySelected(e.target.value);
  };

  return (
    <div>
      <Input
        id="amount"
        value={amount > 0 ? amount.toString() : ""}
        label="Amount"
        placeholder='e.g. "100"'
        onChange={handleAmountChange}
      />
      {
        /**
         * @enhancment Add a skeleton loader to show while waiting for currencies
         */
        currencies ? (
          <>
            <Select
              id="source-currency"
              label="From"
              onChange={handleSourceCurrencyChange}
              options={currencies}
              selectedValue={sourceCurrencySelected}
            />

            <Select
              id="target-currency"
              label="To"
              onChange={handleTargetCurrencyChange}
              options={currencies}
              selectedValue={targetCurrencySelected}
            />
          </>
        ) : (
          <div>Loading...</div>
        )
      }

      <Result
        amount={amount}
        exchangeRate={exchangeRate}
        from={sourceCurrencySelected}
        to={targetCurrencySelected}
      />
    </div>
  );
};

export { Exchange };
