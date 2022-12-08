import { useState, useCallback } from 'react';
import axios from 'axios';

export const UseFetch = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setErro] = useState<any>(null);

  const request = useCallback(async (url: string) => {
    let response;
    try {
      setLoading(true);
      const responseApi = await axios.get(url);
      response = await responseApi.data.results;
    } catch (erro) {
      response = null;
      console.log(erro);
      setErro('Estou apenas testando');
    } finally {
      setLoading(false);
      setData(response);
    }
    return { response };
  }, []);

  return { data, request, loading, error };
};
