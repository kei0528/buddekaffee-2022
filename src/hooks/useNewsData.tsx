import { NewsType } from 'src/types/news.type';
import { fetcher } from 'src/utils/fetcher';
import useSWR from 'swr';

export const useNewsData = () => {
  const { data, error, mutate } = useSWR('api/news', fetcher);

  const d = data as unknown;
  const dataTyped = d as NewsType;

  return {
    data: dataTyped,
    error,
    mutate,
    isLoading: !data && !error
  };
};
