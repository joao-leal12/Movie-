import { useState, useEffect } from 'react';
import { GET_GENRE } from '../../utils/API/API_ROUTES';
import { UseFetch } from '../../hooks/UseFetch';
import { Text } from '@chakra-ui/react';

export const Genre = ({ genre }: number[] | any) => {
  const [genreMovie, setGenreMovie] = useState('');
  const [inforGenres, setInforGenres] = useState<any[]>([]);
  const { url } = GET_GENRE();
  const { request } = UseFetch();

  useEffect(() => {
    const GetGenreMovie = async () => {
      const response = await request(url);

      setInforGenres(response.genres);
    };
    void GetGenreMovie();
  }, []);

  useEffect(() => {
    if (inforGenres.length > 0) {
      inforGenres.filter((genres) =>
        genres.id === genre[0] ? setGenreMovie(genres.name) : ''
      );
    }
  }, [genre]);
  return (
    <Text fontSize="1.8rem" letterSpacing="0.16em">
      {genreMovie}
    </Text>
  );
};
