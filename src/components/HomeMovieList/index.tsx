import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
import { useContextCreate } from '../../hooks/useContextCreate';

export const HomeMoviesList = () => {
  const { listMovies, page, setPage, inforGenres, setGenresCode, genreName } =
    useContextCreate();

  useEffect(() => {
    setPage(1);
  }, [genreName]);

  useEffect(() => {
    if (genreName !== '/') {
      const newValue = inforGenres
        .filter((genres) => genres.name.includes(genreName))
        .reduce((firstValue, Value) => {
          firstValue = Value.id;
          return firstValue;
        }, 0);
      if (typeof newValue === 'number') setGenresCode(newValue);
    }
  }, [genreName, inforGenres]);
  return (
    <Flex as="section">
      <ListMoviesWrapper data={listMovies} page={page} setPage={setPage} />
    </Flex>
  );
};
