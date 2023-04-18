import { Grid, Flex } from '@chakra-ui/react';

import { useContextCreate } from '../../hooks/useContextCreate';
import { MovieCard } from '../MovieCard';
import { Loading } from '../helpers/loading';
import { When } from '../When';
import { useEffect, useState } from 'react';
import { IMovieData } from '../../types/ApiType';

interface IMoviesWrapperProps {
  genreName: string;
}
export const ListMoviesWrapper = ({ genreName }: IMoviesWrapperProps) => {
  const [moviesRender, setMoviesRender] = useState<IMovieData[]>([]);
  const { genres, isLoading, listMovies, listMoviesByGenres } =
    useContextCreate();

  useEffect(() => {
    if (genreName !== '/') {
      setMoviesRender(listMoviesByGenres);
    } else {
      setMoviesRender(listMovies);
    }
  }, [listMovies, listMoviesByGenres, genreName]);
  if (isLoading) return <Loading positions="absolute" />;
  return (
    <Flex flexDir={'column'}>
      <Grid
        as="section"
        templateColumns={[
          'repeat(2,1fr)',
          'repeat(2,1fr)',
          'repeat(2,1fr)',
          'repeat(3,1fr)',
        ]}
        gap={'2.4rem'}
        paddingRight={'2.5rem'}
      >
        <When expr={moviesRender?.length > 0}>
          {moviesRender?.map((movie) => (
            <MovieCard
              key={movie.id}
              inforGenres={genres?.genres}
              dataMovie={movie}
            />
          ))}
        </When>
      </Grid>
      {/* {!isLoading && (
          <Flex as="div" ref={LoadingWrapperObserve}>
            <Loading />
          </Flex>
        )} */}
    </Flex>
  );
};
