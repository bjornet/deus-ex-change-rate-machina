import { storeManager } from "store";
import { ChangeEvent } from "react";
import { StoreSegments } from "store/enums";
import { Select } from "components/Select";
import { Input } from "components/Input";
import { Result } from "components/Result";
import { useExchangeRates } from "context";

const Exchange = () => {
  const {
    currencies,
    setTargetCurrencies,
    amount,
    setAmount,
    sourceCurrencySelected,
    setCurrencySelected,
    targetCurrencySelected,
    setTargetCurrencySelected,
  } = useExchangeRates();

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
    <div className="flex gap-4 flex-col md:flex-row">
      <div>
        <div className="bg-sky-900 rounded-md px-4 py-4">
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
      </div>

      <Result />
    </div>
  );
};

export { Exchange };
