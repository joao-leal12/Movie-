import { useQuery } from 'react-query';
import { apiCall } from '../lib/apiCall';

export function UseFetch<T>(text: string, url: string) {
  const fetcher = async (): Promise<T> => {
    return await apiCall.get(url).then((data) => data.data);
  };
  const { data, isLoading, isError } = useQuery<T>({
    queryFn: fetcher,
    queryKey: [text, url],
  });

  return { data, isLoading, isError };
}
