import { Grid } from '@chakra-ui/react';
import { IMovieData } from '../../types/ApiType';
import { useContextCreate } from '../../hooks/useContextCreate';
import { MovieCard } from '../MovieCard';
interface IListMoviesProps {
  data: IMovieData[];
}
export const ListMoviesWrapper = ({ data = [] }: IListMoviesProps) => {
  const { inforGenres } = useContextCreate();
  return (
    <Grid
      as="section"
      templateColumns={[
        'repeat(2,1fr)',
        'repeat(2,1fr)',
        'repeat(2,1fr)',
        'repeat(3,1fr)',
      ]}
      gap={'2.4rem'}
    >
      {data.length > 0 &&
        data.map((movie) => (
          <MovieCard
            inforGenres={inforGenres}
            key={movie.id}
            dataMovie={movie}
          />
        ))}
    </Grid>
  );
};
