import { Grid, Flex } from '@chakra-ui/react';

import { useContextCreate } from '../../hooks/useContextCreate';
import { MovieCard } from '../MovieCard';
import { Loading } from '../helpers/loading';
import { When } from '../When';
import { useEffect, useRef } from 'react';
import { IMovieData } from '../../types/ApiType';
import { UseFetch } from '../../hooks/useFetch';
import { GET_MOVIES } from '../../API/API_ROUTES';
interface IMoviesWrapperProps {
  genreName: string;
}
export const ListMoviesWrapper = ({ genreName }: IMoviesWrapperProps) => {
  const ObserverLazyLoading = useRef<HTMLDivElement | null>(null);
  const { genres, setPage, page, movies } = useContextCreate();
  const { url } = GET_MOVIES(1);
  const { data: listMovies, isLoading } = UseFetch<IMovieData[]>(url);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPage(page + 1);
      }
    });
    if (ObserverLazyLoading.current != null) {
      observer.observe(ObserverLazyLoading.current);
    }

    return () => observer.disconnect();
  }, []);
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
        <When expr={movies.length === 0}>
          <When expr={listMovies !== undefined && listMovies?.length > 0}>
            {listMovies?.map((movie) => (
              <MovieCard
                key={movie.id}
                inforGenres={genres?.genres}
                dataMovie={movie}
              />
            ))}
          </When>
        </When>
        <When expr={movies.length > 0}>
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              inforGenres={genres?.genres}
              dataMovie={movie}
            />
          ))}
        </When>
      </Grid>

      <Flex as="div" ref={ObserverLazyLoading}>
        <Loading />
      </Flex>
    </Flex>
  );
};
