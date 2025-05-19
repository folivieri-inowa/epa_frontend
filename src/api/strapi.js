import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher } from 'src/utils/axios';

// ----------------------------------------------------------------------

export function useGetStrapiPosts(URL) {
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      post: data || [],
      postLoading: isLoading,
      postError: error,
      postValidating: isValidating,
      postEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
