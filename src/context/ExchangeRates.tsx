import { fetchLatestRates } from "api";
import { clientCache } from "api/clientCache";
import { fetchCurrencies } from "api/fetchCurrencies";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Maybe } from "types/types";

type ExchangeRatesContextType = {
  rates: Record<string, number>;
  currencies: string[];
};

const ExchangeRatesContext =
  createContext<Maybe<ExchangeRatesContextType>>(null);

const dateToday = new Date().toISOString();

export const ExchangeRatesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [rates, setRates] = useState<ExchangeRatesContextType["rates"]>({});
  const [currencies, setCurrencies] = useState<
    ExchangeRatesContextType["currencies"]
  >([]);

  /**
   * - fetch currency codes
   * - store in client cache to avoid unnecessary API calls
   * - set the rates context value
   * @todo Add currencies to the storage with a timestamp to avoid unnecessary API calls
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
   * @todo Add rates to the storage with a timestamp to avoid unnecessary API calls
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

  const memoizedValue = useMemo(
    () => ({
      rates,
      currencies,
    }),
    [rates, currencies],
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
