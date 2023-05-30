import { useQuery } from 'react-query';
import { apiCall } from '../lib/apiCall';
interface IFetchProps {
  types: string;
  url: string;
}

export function UseFetch<T>({ types, url }: IFetchProps) {
  const { data, isLoading, isError } = useQuery<T | T[]>(
    types,
    async (): Promise<T> => {
      return await apiCall.get(url).then((r) => r.data);
    }
  );

  return { data, isLoading, isError };
}
