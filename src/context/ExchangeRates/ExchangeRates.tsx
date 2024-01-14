import { fetchLatestRates } from "api";
import { clientCache } from "api/clientCache";
import { fetchCurrencies } from "api/fetchCurrencies";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { Maybe } from "types/types";
import { storeManager } from "store";
import { StoreSegments } from "store/enums";
import { fetchHistorical } from "api/fetchHistorical";
import { targetCurrenciesReducer } from "./actions";
import {
  TargetCurrenciesAction,
  TargetCurrenciesReducer,
} from "./actions/types";

type ExchangeRatesContextType = {
  rates: Record<string, number>;
  currencies: string[];
  targetCurrencies: ReturnType<TargetCurrenciesReducer>;
  setTargetCurrencies: Dispatch<TargetCurrenciesAction>;
  amount: number;
  setAmount: Dispatch<number>;
  sourceCurrencySelected: string;
  setCurrencySelected: Dispatch<string>;
  targetCurrencySelected: string;
  setTargetCurrencySelected: Dispatch<string>;
};

/**
 * @enhancement Make it possible for a user to change the decimals precision
 */
export const TARGET_DECIMALS_PRECISION = 4;

/**
 * @enhancement Read the source currency from the user's location
 */
const SOURCE_CURRENCY_DEFAULT = "SEK";

const TARGET_CURRENCY_DEFAULT = "USD";

const ExchangeRatesContext =
  createContext<Maybe<ExchangeRatesContextType>>(null);

const dateToday = new Date().toISOString();

/**
 * Restore exchange values on mount
 */
const storedSourceCurrency = storeManager.get(
  StoreSegments.CURRENCY_SELECTED_SOURCE,
);

const storedTargetCurrency = storeManager.get(
  StoreSegments.CURRENCY_SELECTED_TARGET,
);

const storedTargetCurrencies = storeManager.get(
  StoreSegments.CURRENCY_SELECTED_TARGETS,
);

export const ExchangeRatesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [targetCurrencies, setTargetCurrencies] = useReducer(
    targetCurrenciesReducer,
    storedTargetCurrencies || [TARGET_CURRENCY_DEFAULT],
  );

  const [amount, setAmount] = useState<number>(1);

  const [sourceCurrencySelected, setCurrencySelected] = useState<string>(
    storedSourceCurrency || SOURCE_CURRENCY_DEFAULT,
  );

  const [targetCurrencySelected, setTargetCurrencySelected] = useState<string>(
    storedTargetCurrency || TARGET_CURRENCY_DEFAULT,
  );

  /**
   * @enhancement We should not store the target currencies in the store if they are not changed
   * - add something like https://ramdajs.com/docs/#equals
   */
  useEffect(() => {
    if (targetCurrencies.length === 0) return;

    storeManager.set(StoreSegments.CURRENCY_SELECTED_TARGETS, targetCurrencies);
  }, [targetCurrencies]);

  const [rates, setRates] = useState<ExchangeRatesContextType["rates"]>({});
  const [currencies, setCurrencies] = useState<
    ExchangeRatesContextType["currencies"]
  >([]);
  const [historical, setHistorical] = useState<
    ExchangeRatesContextType["rates"]
  >({});

  /**
   * - fetch currency codes
   * - store in client cache to avoid unnecessary API calls
   * - set the currency codes context value
   * @todo Add currencies to the storage with a timestamp to avoid unnecessary API calls on page refresh
   */
  const initCurrencies = useMemo(
    () => async () => {
      const UID = `currencies-${dateToday}}`;

      const response = await clientCache(UID, fetchCurrencies);

      if (!response) return;

      setCurrencies(Object.keys(response));
    },
    [],
  );

  /**
   * - fetch rates
   * - store in client cache to avoid unnecessary API calls
   * - set the rates context value
   * @todo Add rates to the storage with a timestamp to avoid unnecessary API calls on page refresh
   */
  const initRates = useMemo(
    () => async () => {
      const UID = `rates-${dateToday}}`;

      const response = await clientCache(UID, fetchLatestRates);

      if (!response || !response?.rates) return;

      setRates(response.rates);
    },
    [],
  );

  /**
   * - fetch historical rates
   * - store in client cache to avoid unnecessary API calls
   * - set the historical rates context value
   * @todo Add historical rates to the storage with a timestamp to avoid unnecessary API calls on page refresh
   */
  const initHistoricalRates = useMemo(
    () => async (date: string) => {
      const UID = `historical-rates-${date}}`;

      /**
       * @note this endpoint is not useful if we dont have a paid plan
       */
      const response = await clientCache(UID, () =>
        fetchHistorical(date.split("T")[0]),
      );

      if (!response || !response?.rates) return;

      setHistorical(response.rates);
    },
    [],
  );

  /**
   * Fetch currencies on mount
   */
  useEffect(() => {
    if (currencies.length > 0) return;

    initCurrencies();
  }, [currencies, initCurrencies]);

  /**
   * Fetch rates on mount
   */
  useEffect(() => {
    if (Object.keys(rates).length > 0) return;

    initRates();
  }, [rates, initRates]);

  /**
   * Fetch historical rates on mount
   * @note not used in the app (read the note in src/components/Result/Result.tsx)
   */
  useEffect(() => {
    if (Object.keys(historical).length > 0) return;

    initHistoricalRates(dateToday);
  }, [historical, initHistoricalRates]);

  const memoizedValue = useMemo(
    () => ({
      rates,
      currencies,
      targetCurrencies,
      setTargetCurrencies,
      amount,
      setAmount,
      sourceCurrencySelected,
      setCurrencySelected,
      targetCurrencySelected,
      setTargetCurrencySelected,
    }),
    [
      rates,
      currencies,
      targetCurrencies,
      setTargetCurrencies,
      amount,
      setAmount,
      sourceCurrencySelected,
      setCurrencySelected,
      targetCurrencySelected,
      setTargetCurrencySelected,
    ],
  );

  return (
    <ExchangeRatesContext.Provider value={memoizedValue}>
      {children}
    </ExchangeRatesContext.Provider>
  );
};

export const useExchangeRates = () => {
  const ctx = useContext(ExchangeRatesContext);
  if (!ctx) throw new Error("Exchange Rates accessed outside of app provider.");

  return ctx;
};
