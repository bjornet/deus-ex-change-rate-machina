import { storeManager } from "store";
import { ChangeEvent } from "react";
import { StoreSegments } from "store/enums";
import { Select } from "components/Select";
import { Input } from "components/Input";
import { Result } from "components/Result";
import { useExchangeRates } from "context";
import { useExchange } from "./useExchange";

const Exchange = () => {
  const { currencies, setTargetCurrencies } = useExchangeRates();

  const {
    amount,
    setAmount,
    sourceCurrencySelected,
    setCurrencySelected,
    targetCurrencySelected,
    setTargetCurrencySelected,
  } = useExchange();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    storeManager.set(StoreSegments.AMOUNT, Number(e.target.value));

    setAmount(Number(e.target.value));
  };

  const handleSourceCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    storeManager.set(StoreSegments.CURRENCY_SELECTED_SOURCE, e.target.value);

    setCurrencySelected(e.target.value);
  };

  const handleTargetCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    storeManager.set(StoreSegments.CURRENCY_SELECTED_TARGET, e.target.value);

    setTargetCurrencySelected(e.target.value);

    setTargetCurrencies({
      type: "add",
      payload: e.target.value,
    });
  };

  return (
    <div className="grid gap-4">
      <div className="bg-sky-800 rounded-md px-8 py-6">
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

              {/**
               * @enhancement Better UX would be to let the user select currencies
               * from a select element enhanced with autosuggestion and/or checkboxes
               */}
              <Select
                id="target-currency"
                label="To (select one or more)"
                onChange={handleTargetCurrencyChange}
                options={currencies}
                selectedValue={targetCurrencySelected}
              />
            </>
          ) : (
            <div>Loading...</div>
          )
        }
      </div>

      <Result amount={amount} from={sourceCurrencySelected} />
    </div>
  );
};

export { Exchange };
