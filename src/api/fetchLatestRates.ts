import { FetchLatestRates } from "api/types";
import { APP_ID, BASE_URL, fetchOptionsGET } from "./config";

export const fetchLatestRates: FetchLatestRates = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/latest.json?app_id=${APP_ID}`,
      fetchOptionsGET,
    );

    const rates = await response.json();

    return rates;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return [];
};
