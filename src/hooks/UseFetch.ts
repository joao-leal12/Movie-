import { useState, useCallback } from 'react';
import axios from 'axios';
import { IReturnApi } from '../types/ApiReturn';
import { GET_MOVIES } from '../utils/API/GET_MOVIES';

export const UseFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setErro] = useState<any>(null);
  const { url } = GET_MOVIES();
  const request = useCallback(async (): Promise<IReturnApi> => {
    let response;
    try {
      setLoading(true);
      const responseApi = await axios.get(url);
      response = responseApi.data.results;
      console.log(response);
    } catch (err) {
      response = null;
      setErro(err);
    } finally {
      setLoading(false);
      setData(response);
    }

    return { response };
  }, []);

  return { data, request, loading, error };
};
