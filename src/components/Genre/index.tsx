import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import { IGenresFilter } from '../../types/ApiType';

export const Genre = ({ genre, inforGenres }: IGenresFilter) => {
  const [genreMovie, setGenreMovie] = useState<string | undefined>();

  useEffect(() => {
    if (inforGenres != null && inforGenres?.length > 0) {
      const nameOfGenres = inforGenres.find((genres) => genres.id === genre[0]);
      setGenreMovie(nameOfGenres?.name);
    }
  }, [genre, inforGenres]);

  return (
    <>
      {genreMovie !== null && (
        <Text fontSize="2rem" letterSpacing="0.16em">
          {genreMovie}
        </Text>
      )}
    </>
  );
};
