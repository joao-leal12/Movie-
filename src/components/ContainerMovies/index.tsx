import { chakra } from '@chakra-ui/react';
import { RoutesMovies } from '../RoutesMovies';
import { useState, useEffect } from 'react';
import { IMovieData } from '../../types/ApiReturn';
import { UseFetch } from '../../hooks/UseFetch';
import { GET_MOVIES } from '../../utils/API/API_ROUTES';
import { useFilter } from '../../hooks/useFilter';

export const ContainerMovies = () => {
  const [dataMovies, setDataMovies] = useState<IMovieData[] | null>(null);
  const { request, loading } = UseFetch();
  const { ElementsFiltered, newElement } = useFilter(dataMovies);

  const getMovieData = async () => {
    const { url } = GET_MOVIES(1);
    const { results } = await request(url);

    setDataMovies(results);
  };
  useEffect(() => {
    void getMovieData();
  }, []);
  useEffect(() => {
    if (ElementsFiltered !== undefined && ElementsFiltered.length > 0) {
      setDataMovies(ElementsFiltered);
    }
    if (newElement.length === 0) {
      void getMovieData();
    }
  }, [ElementsFiltered, newElement]);

  return (
    <chakra.section mt="2rem">
      <RoutesMovies data={dataMovies} loading={loading} />
    </chakra.section>
  );
};
