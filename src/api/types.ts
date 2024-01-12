export type UrlParams<B> = B extends undefined ? undefined : B[];

type RequestBody<T> = T extends undefined ? undefined : T;

export type Options<T = undefined, B = undefined> = {
  body?: RequestBody<T>;
  urlParams?: UrlParams<B>;
};

type OXRLatestResponse = {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: string;
  rates: {
    [key: string]: number;
  };
};

export type FetchLatestRates = () => Promise<OXRLatestResponse>;

type OXRCurrenciesResponse = {
  [key: string]: string;
};

export type FetchCurrencies = () => Promise<OXRCurrenciesResponse>;

/**
 * @TODO make sure this is the correct type
 */
type OXRHistoricalResponse = {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: string;
  rates: {
    [key: string]: number;
  };
};

export type FetchHistorical = (date: string) => Promise<OXRHistoricalResponse>;
