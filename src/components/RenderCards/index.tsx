import { chakra } from '@chakra-ui/react';
import { IMovieData } from '../../types/ApiType';
import { MovieCard } from '../MovieCard';
import { useContextCreate } from '../../hooks/useContextCreate';

export const RenderCards = ({ data }: any) => {
  const { inforGenres } = useContextCreate();

  return (
    <chakra.ul
      display="grid"
      gridTemplateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ]}
      justifyItems="center"
      gap="2.4rem"
    >
      {data?.map((movie: IMovieData) => (
        <MovieCard dataMovie={movie} key={movie.id} inforGenres={inforGenres} />
      ))}
    </chakra.ul>
  );
};
