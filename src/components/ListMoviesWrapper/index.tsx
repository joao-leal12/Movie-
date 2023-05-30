import { Grid, Flex } from '@chakra-ui/react';

import { useContextCreate } from '../../hooks/useContextCreate';
import { MovieCard } from '../MovieCard';
import { Loading } from '../helpers/loading';
import { When } from '../When';
import { useEffect, useState, useRef } from 'react';
import { IMovieData } from '../../types/ApiType';

interface IMoviesWrapperProps {
  genreName: string;
}
export const ListMoviesWrapper = ({ genreName }: IMoviesWrapperProps) => {
  const [moviesRender, setMoviesRender] = useState<IMovieData[]>([]);
  const ObserverLazyLoading = useRef<HTMLDivElement | null>(null);
  const { genres, isLoading, listMovies, listMoviesByGenres, setPage, page } =
    useContextCreate();

  useEffect(() => {
    if (genreName !== '/') {
      setMoviesRender(listMoviesByGenres);
    } else {
      setMoviesRender((prevState) => [...prevState, ...listMovies]);
    }
  }, [listMovies, listMoviesByGenres, genreName]);

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
        <When expr={moviesRender.length > 0}>
          {moviesRender.map((movie) => (
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
