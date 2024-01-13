import { Pill } from "components/Pill";
import { TARGET_DECIMALS_PRECISION } from "context/ExchangeRates/ExchangeRates";
import { FC } from "react";
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
  const handleClick = () => {
    onClick(currency);
  };

  const targetValue = amount * exchangeRate;

  return (
    <div className="text-4xl mt-2 border-2 border-slate-200 rounded-md relative min-h-10 box-content">
      {targetValue ? (
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
          <div className="text-sm pr-3 pb-2">
            <span className="text-yellow-500">+13,93%</span> since March 26th,
            2015
          </div>
        </div>
      ) : (
        <div className="grid gap-2">
          <ResultItemClose onClick={handleClick} />
          <div>N/A</div>
        </div>
      )}
    </div>
  );
};

export { ResultItem };
