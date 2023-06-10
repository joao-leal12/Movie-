import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
import { useContextCreate } from '../../hooks/useContextCreate';

export const HomeMoviesList = () => {
<<<<<<< HEAD
  const { genres, setGenresCode, genreName } = useContextCreate();

  useEffect(() => {
    if (genreName !== '/' && genres?.genres != null) {
      const newValue = genres.genres
=======
  const { listMovies, page, setPage, inforGenres, setGenresCode, genreName } =
    useContextCreate();

  useEffect(() => {
    setPage(1);
  }, [genreName]);

  useEffect(() => {
    if (genreName !== '/') {
      const newValue = inforGenres
>>>>>>> main
        .filter((genres) => genres.name.includes(genreName))
        .reduce((firstValue, Value) => {
          firstValue = Value.id;
          return firstValue;
        }, 0);
      if (typeof newValue === 'number') setGenresCode(newValue);
    }
<<<<<<< HEAD
  }, [genreName, genres]);
  return (
    <Flex as="section">
      <ListMoviesWrapper genreName={genreName} />
=======
  }, [genreName, inforGenres]);
  return (
    <Flex as="section">
      <ListMoviesWrapper data={listMovies} page={page} setPage={setPage} />
>>>>>>> main
    </Flex>
  );
};
