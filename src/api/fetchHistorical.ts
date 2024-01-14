import { APP_ID, BASE_URL, fetchOptionsGET } from "./config";
import { FetchHistorical } from "./types";

export const fetchHistorical: FetchHistorical = async (date) => {
  /**
   * @enhandle check if date is a valid ISO 8601 date
   */

  try {
    const response = await fetch(
      `${BASE_URL}/historical/${date}.json?app_id=${APP_ID}}`,
      fetchOptionsGET,
    );

    const historical = await response.json();

    return historical;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return [];
};
