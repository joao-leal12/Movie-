import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { useContextCreate } from '../../hooks/useContextCreate';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
type IGenresParamsProps = Record<string, string>;

export const GenreMovieList = () => {
  const { genre } = useParams() as IGenresParamsProps;

  const { inforGenres, setGenres, moviesOfGenre } = useContextCreate();

  useEffect(() => {
    const newValue = inforGenres
      .filter((genres) => genres.name.includes(genre))
      .reduce((firstValue, Value) => {
        firstValue = Value.id;

        return firstValue;
      }, {});
    if (typeof newValue === 'number') setGenres(newValue);
  }, [genre, inforGenres]);

  return (
    <Flex as="section">
      <ListMoviesWrapper data={moviesOfGenre} />
    </Flex>
  );
};
