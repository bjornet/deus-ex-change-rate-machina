import { FetchLatestRates } from "api/types";
import { APP_ID } from "../UNSECURE_secrets";
import { fetchOptionsGET, oxrAPIBaseURL } from "./config";

export const fetchLatestRates: FetchLatestRates = async () => {
  try {
    const response = await fetch(
      `${oxrAPIBaseURL}/latest.json?app_id=${APP_ID}`,
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
