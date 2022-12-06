import { useEffect } from 'react';
import { UseFetch } from '../../hooks/UseFetch';

export const TesteContainer = () => {
  const { request, data } = UseFetch();

  useEffect(() => {
    const { response } = request();
    console.log(response);
  }, []);
  return <div>{data != null && <p>{data[0].id}</p>}</div>;
};
