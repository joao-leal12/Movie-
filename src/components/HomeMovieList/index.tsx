import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
import { useContextCreate } from '../../hooks/useContextCreate';

export const HomeMoviesList = () => {
  const { genres, setGenresCode, genreName } = useContextCreate();

  useEffect(() => {
    if (genreName === '/' && genres?.genres === undefined) return;
    const newValue =
      genres?.genres.find((genres) => genres.name.includes(genreName))?.id ?? 0;

    setGenresCode(newValue);
  }, [genreName, genres]);
  return (
    <Flex as="section">
      <ListMoviesWrapper />
    </Flex>
  );
};
