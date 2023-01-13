import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import { IGenresFilter } from '../../types/ApiType';

export const Genre = ({ genre, inforGenres }: IGenresFilter) => {
  const [genreMovie, setGenreMovie] = useState<string | null>(null);

  useEffect(() => {
    if (inforGenres !== undefined) {
      inforGenres.filter((genres) =>
        genres.id === genre[0] ? setGenreMovie(genres.name) : ''
      );
    }
  }, [genre, inforGenres]);

  return (
    <>
      {genreMovie !== null ? (
        <Text fontSize="2rem" letterSpacing="0.16em">
          {genreMovie}
        </Text>
      ) : (
        <>
          <p>teste</p>
        </>
      )}
    </>
  );
};
