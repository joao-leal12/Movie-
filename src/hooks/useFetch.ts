import { useQuery } from 'react-query';
import { apiCall } from '../lib/apiCall';

export function UseFetch<T>(url: string) {
  const fetcher = async (): Promise<T> => {
    return await apiCall.get(url).then((data) => data.data.results);
  };
  const { data, isLoading, isError } = useQuery<T>({
    queryFn: fetcher,
    queryKey: ['movies', url],
  });

  return { data, isLoading, isError };
}
