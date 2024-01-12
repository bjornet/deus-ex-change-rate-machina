import { fetchOptionsGET, oxrAPIBaseURL } from "./config";
import { FetchCurrencies } from "./types";

export const fetchCurrencies: FetchCurrencies = async () => {
  try {
    const response = await fetch(
      `${oxrAPIBaseURL}/currencies.json`,
      fetchOptionsGET,
    );

    const currencies = await response.json();

    return currencies;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return [];
};
