import { createContext, ReactNode, useEffect, useState } from 'react';
import { GET_MOVIES } from '../utils/API/API_ROUTES';

import { UseFetch } from '../hooks/UseFetch';

interface IChildrenProps {
  children: ReactNode;
}
interface IReturndata {
  data: null;
  setData: () => void;
}
export const GlobalContext = createContext<IReturndata>({
  data: null,
  setData: () => {},
});

export const GlobalProvider = ({ children }: IChildrenProps) => {
  const { request } = UseFetch();
  const [data, setData] = useState<IReturndata | null>(null);
  useEffect(() => {
    const getMovieData = async () => {
      const { url } = GET_MOVIES(1);
      const { results } = await request(url);

      setData(results);
    };

    void getMovieData();
  }, []);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
