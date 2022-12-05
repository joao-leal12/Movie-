import { useState, useCallback } from 'react';
import axios from 'axios';
import { GET_MOVIES } from '../utils/API/GET_MOVIES';
export const UseFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setErro] = useState<any>();

  const request = useCallback(async (urls: string) => {
    const { url } = GET_MOVIES(urls);

    try {
      setLoading(true);
      const DataMovie = await axios.get(url);
      setData(DataMovie.data);
    } catch (er) {
      setErro(er);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, request, loading, error };
};
