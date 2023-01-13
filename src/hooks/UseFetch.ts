import { useState, useCallback } from 'react';
import axios from 'axios';
export const UseFetch = () => {
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      return data;
    } catch (erro) {
      console.log(erro);
    } finally {
      setLoading(false);
    }
  }, []);

  return { request, loading };
};
