import { chakra } from '@chakra-ui/react';
import { RoutesMovies } from '../RoutesMovies';
import { GlobalProvider } from '../../Context/GlobalContext';
import { useState, useEffect } from 'react';
import { IMovieData } from '../../types/ApiReturn';
import { UseFetch } from '../../hooks/UseFetch';
import { GET_MOVIES } from '../../utils/API/API_ROUTES';

export const ContainerMovies = () => {
  const [dataMovies, setDataMovies] = useState<IMovieData[] | null>(null);
  const { request, loading } = UseFetch();

  useEffect(() => {
    const getMovieData = async () => {
      const { url } = GET_MOVIES(1);
      const { results } = await request(url);

      setDataMovies(results);
    };

    void getMovieData();
  }, []);

  return (
    <GlobalProvider>
      <chakra.section mt="2rem">
        <RoutesMovies data={dataMovies} loading={loading} />
      </chakra.section>
    </GlobalProvider>
  );
};
