import { useState, useEffect } from 'react';
import { UseFetch } from '../../hooks/UseFetch';
import { useFilter } from '../../hooks/useFilter';
import { IMovieData } from '../../types/ApiType';
import { GET_MOVIES } from '../../utils/API/API_ROUTES';
import { MoviesList } from '../MoviesList';

export const HomeContainerList = () => {
  const [dataMovies, setDataMovies] = useState<IMovieData[] | null>(null);
  const { request, loading } = UseFetch();
  const { ElementsFiltered, newElement } = useFilter(dataMovies);
  const getMovieData = async () => {
    const { url } = GET_MOVIES(1);
    const { results } = await request(url);

    setDataMovies(results);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(() => {
    if (ElementsFiltered !== undefined && ElementsFiltered.length > 0) {
      setDataMovies(ElementsFiltered);
    }
    if (newElement.length === 0) {
      getMovieData();
    }
  }, [ElementsFiltered, newElement]);

  return (
    <>
      <MoviesList data={dataMovies} loading={loading} />
    </>
  );
};
