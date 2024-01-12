import { APP_ID } from "../UNSECURE_secrets";
import { fetchOptionsGET, oxrAPIBaseURL } from "./config";

type FetchConvertValueFromTo = (
  value: number,
  from: string,
  to: string,
) => Promise<unknown>;

/**
 * @note This is the endpoint we ideally want to use for the conversion.
 * But since it is not useful in the free tier,
 * I solved it with a workaround (/latest) acompanied by some duck taping math.
 */
export const fetchConvertValueFromTo: FetchConvertValueFromTo = async (
  value: number,
  from: string,
  to: string,
) => {
  try {
    const response = await fetch(
      `${oxrAPIBaseURL}/convert/${value}/${from}/${to}?app_id=${APP_ID}`,
      fetchOptionsGET,
    );

    const converted = await response.json();

    return converted;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return [];
};
