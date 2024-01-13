import { FC } from "react";
import { Pill } from "components/Pill";
import { useExchangeRates } from "context";
import { getExchangeRate } from "components/Exchange/actions";
import { localizeNumber } from "utils";
import { ResultItem } from "./ResultItem";

type ResultProps = {
  amount: number;
  from: string;
};

const Result: FC<ResultProps> = ({ amount, from }) => {
  const { rates, targetCurrencies, setTargetCurrencies } = useExchangeRates();

  const handleClick = (currency: string) => {
    setTargetCurrencies({
      type: "remove",
      payload: currency,
    });
  };

  /**
   * @enhancment Add a skeleton loader to show while waiting for result
   */
  return (
    <div className="text-2xl text-right">
      <div className="flex justify-between">
        {/**
         * @note This is psuedo code. It's here to demonstrate how a user might be able to
         * - add a historical date to the conversion
         * - so that we can query /historical?date=YYYY-MM-DD
         * - and get the exchange rates for that date
         * - from that we can calculate the exchange rate for the conversion
         */}

        <input
          id="historicalDates"
          name="historicalDates"
          className="block w-fit p-2 border border-gray-300 rounded-md text-slate-600 text-sm"
          placeholder="Date e.g. 2015-05-17"
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          onChange={() => {}}
          value=""
        />

        <div className="pr-4">
          {localizeNumber("sv", from, amount, "decimal", 0)}{" "}
          <Pill color="green" value={from} />
        </div>
      </div>

      <div className="md:grid gap-2 grid-cols-2 lg:grid-cols-3">
        {targetCurrencies.map((targetCurrency) => (
          <ResultItem
            key={targetCurrency}
            amount={amount}
            currency={targetCurrency}
            exchangeRate={getExchangeRate(rates[from], rates[targetCurrency])}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export { Result };
