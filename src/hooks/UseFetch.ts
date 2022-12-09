import { useState, useCallback } from 'react';
import axios from 'axios';

export const UseFetch = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setErro] = useState<any>(null);

  const request = useCallback(async (url: string) => {
    let response;
    let responseApi;
    try {
      setLoading(true);
      setErro(null);
      responseApi = await axios.get(url);
      response = await responseApi.data;
    } catch (erro) {
      response = null;
      console.log(erro);
      setErro(erro);
    } finally {
      setLoading(false);
      setData(response);
    }
    return { responseApi, response };
  }, []);

  return { data, request, loading, error };
};
