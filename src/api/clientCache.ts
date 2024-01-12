import { Options } from "./types";

const makeClientCache = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchMap = new Map<string, Promise<any>>();

  const queryClient = <QueryRequestBody, Params, QueryResult>(
    name: string,
    query: (options: Options<QueryRequestBody, Params>) => Promise<QueryResult>,
    options: Options<QueryRequestBody, Params> = {},
  ): Promise<QueryResult> => {
    if (!fetchMap.has(name)) {
      fetchMap.set(name, query(options));
    }
    return fetchMap.get(name)!;
  };

  return queryClient;
};

export const clientCache = makeClientCache();
