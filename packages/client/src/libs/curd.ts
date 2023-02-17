import { showNotification } from "@mantine/notifications";
import { useSWR, useSWRMutation, SWR_KEYS } from "@libs/swr";
import { fetchData } from "@libs/fetch";

interface FetchMutation {
  errmsg?: string;
  fethQuery: () => Promise<any>;
}

interface UseCURD {
  swrKey: SWR_KEYS;
  find?: FetchMutation;
  mutations?: FetchMutation[];
}

const fetcher = async (
  fetchQuery: Record<string, any> | Record<string, any>[]
) => {
  const result = await fetchData(fetchQuery);

  if (Array.isArray(result)) {
  } else {
    const { success, data, errmsg } = Object.values(result)[0];

    return success
      ? data
      : showNotification({
          message: errmsg,
        });
  }
};

export const useCURD = ({ swrKey, find, mutations = [] }: UseCURD) => {
  const defaultFn = () => {};

  const findTrigger = useSWR(swrKey, find ? () => fetcher(find) : defaultFn);

  const triggers = mutations.map((mutation) =>
    useSWRMutation(swrKey, () => fetcher(mutation.fethQuery))
  );

  return {
    findTrigger,
    triggers,
  };
};
