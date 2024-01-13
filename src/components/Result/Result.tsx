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
    <div className="mt-4 text-2xl text-right">
      <div className="pr-4">
        {localizeNumber("sv", from, amount, "decimal", 0)}{" "}
        <Pill color="green" value={from} />
      </div>
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
  );
};

export { Result };
