import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
import { useContextCreate } from '../../hooks/useContextCreate';

export const HomeMoviesList = () => {
  type IGenreParamsProps = Record<string, string>;
  const {
    listMovies,
    page,
    setPage,
    inforGenres,
    setGenresCode,
    setGenrePathRoute,
  } = useContextCreate();
  const { genrePath } = useParams() as IGenreParamsProps;

  useEffect(() => {
    setPage(1);
  }, [genrePath]);
  useEffect(() => {
    if (genrePath !== undefined) {
      setGenrePathRoute(genrePath);
      const newValue = inforGenres
        .filter((genres) => genres.name.includes(genrePath))
        .reduce((firstValue, Value) => {
          firstValue = Value.id;
          return firstValue;
        }, 0);
      if (typeof newValue === 'number') setGenresCode(newValue);
    } else {
      setGenrePathRoute('');
    }
  }, [genrePath, inforGenres]);
  return (
    <Flex as="section">
      <ListMoviesWrapper data={listMovies} page={page} setPage={setPage} />
    </Flex>
  );
};
