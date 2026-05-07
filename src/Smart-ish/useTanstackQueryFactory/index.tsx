import { useMemo } from "react";

import {
  type QueryClient,
  type QueryKey,
  queryOptions,
  useQuery,
} from "@tanstack/react-query";

type Selector<TInput, TOutput> = (input: TInput) => TOutput;

export function defineQuery<TQueryFnData, TKey extends QueryKey>(config: {
  queryKey: TKey;
  queryFn: () => Promise<TQueryFnData>;
  staleTime?: number;
}) {
  const base = () =>
    queryOptions({
      queryKey: config.queryKey,
      queryFn: config.queryFn,
      staleTime: config.staleTime,
    });

  function use<TSelected = TQueryFnData>(
    select?: Selector<TQueryFnData, TSelected>,
  ) {
    return useQuery({
      ...base(),
      select,
    });
  }

  function get(queryClient: QueryClient) {
    return queryClient.getQueryData<TQueryFnData>(base().queryKey);
  }

  function ensure(queryClient: QueryClient) {
    return queryClient.ensureQueryData(base());
  }

  function derive<TSelected>(select: Selector<TQueryFnData, TSelected>) {
    return function useDerived() {
      return use(select);
    };
  }

  function deriveParam<TArg, TSelected>(
    makeSelect: (arg: TArg) => Selector<TQueryFnData, TSelected>,
  ) {
    return function useDerived(arg: TArg) {
      const select = useMemo(() => makeSelect(arg), [arg]);
      return use(select);
    };
  }

  return { base, use, get, ensure, derive, deriveParam };
}
