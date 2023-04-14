import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
import { useContextCreate } from '../../hooks/useContextCreate';

export const HomeMoviesList = () => {
  const { genres, setGenresCode, genreName } = useContextCreate();

  useEffect(() => {
    if (genreName !== '/' && genres?.genres != null) {
      const newValue = genres.genres
        .filter((genres) => genres.name.includes(genreName))
        .reduce((firstValue, Value) => {
          firstValue = Value.id;
          return firstValue;
        }, 0);
      if (typeof newValue === 'number') setGenresCode(newValue);
    }
  }, [genreName, genres]);
  return (
    <Flex as="section">
      <ListMoviesWrapper />
    </Flex>
  );
};
