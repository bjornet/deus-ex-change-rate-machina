import { Pill } from "components/Pill";
import { TARGET_DECIMALS_PRECISION } from "context/ExchangeRates/ExchangeRates";
import { FC, useEffect, useState } from "react";
import { localizeNumber } from "utils";
import { ResultItemClose } from "./ResultItemClose";

type ResultItemProps = {
  amount: number;
  currency: string;
  exchangeRate: number;
  onClick: (currency: string) => void;
};

const ResultItem: FC<ResultItemProps> = ({
  amount,
  currency,
  exchangeRate,
  onClick,
}) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    onClick(currency);
  };

  const targetValue = amount * exchangeRate;

  useEffect(() => {
    setShowItem(true);
  }, [targetValue]);

  return (
    <div
      className={`transition-opacity duration-200 ease-in ${
        showItem ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-4xl border-2 border-slate-200 rounded-md relative min-h-10 box-content bg-slate-800">
        <div className="grid gap-2 grid-cols-[1fr_5fr]">
          <div className="row-span-2 text-left">
            <ResultItemClose onClick={handleClick} />
          </div>
          <div className="pt-4 pr-3">
            ={" "}
            {localizeNumber(
              "sv",
              currency,
              targetValue,
              "decimal",
              TARGET_DECIMALS_PRECISION,
            )}{" "}
            <Pill color="blue" value={currency} />
          </div>
          {/**
           * @note This is psuedo code. It's here to demonstrate how we could show the change in exchange rate over time
           * - this is a derivitive of the historical exchange rates and the main (default. latest) exchange rate
           * - we could also show a graph of the exchange rate over time
           * - this would be a good place to use a charting library like recharts or react-vis
           */}
          <div className="text-sm pr-3 pb-2">
            <span className="text-yellow-500">+13,93%</span> since March 26th,
            2015
          </div>
        </div>
      </div>
    </div>
  );
};

export { ResultItem };
