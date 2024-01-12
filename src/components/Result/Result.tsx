import { FC } from "react";
import { Maybe } from "types/types";
import { localizeNumber } from "../../utils/localizeNumber";

type ResultProps = {
  amount: number;
  from: string;
  to: string;
  exchangeRate: Maybe<number>;
  decimals?: number;
};

const Result: FC<ResultProps> = ({
  amount,
  from,
  to,
  exchangeRate,
  decimals = 4,
}) => {
  /**
   * @todo extract locale ("sv") to a context or read it from the browser
   */

  const result = exchangeRate
    ? localizeNumber("sv", to, amount * exchangeRate, "decimal", decimals)
    : null;

  /**
   * @enhancment Add a skeleton loader to show while waiting for result
   */
  return result && result !== "N/A" ? (
    <div className="text-xl mt-8 p-4 border-2 border-slate-200 rounded-md ">
      {localizeNumber("sv", from, amount, "decimal", decimals)} {from}
      <div className="text-4xl">
        = {result} {to}
      </div>
    </div>
  ) : null;
};

export { Result };
