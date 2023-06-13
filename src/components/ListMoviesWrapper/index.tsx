import { Grid, Flex } from '@chakra-ui/react';

import { useContextCreate } from '../../hooks/useContextCreate';
import { MovieCard } from '../MovieCard';
import { Loading } from '../helpers/loading';
import { When } from '../When';
import { useEffect, useRef, useState } from 'react';
import { IMovieData, IMoviesData } from '../../types/ApiType';
import { UseFetch } from '../../hooks/useFetch';
import { GET_MOVIES, GET_MOVIES_OF_GENRE } from '../../API/API_ROUTES';

export const ListMoviesWrapper = () => {
  const ObserverLazyLoading = useRef<HTMLDivElement | null>(null);
  const { genres, setPage, page, movies, genresCode, genreName } =
    useContextCreate();
  const { url: moviesUrl } = GET_MOVIES(1);
  const { url: moviesByGenre } = GET_MOVIES_OF_GENRE(genresCode, 1);
  const [urls, setUrls] = useState(moviesUrl);
  const { data: listMovies, isLoading } = UseFetch<IMoviesData>('movies', urls);

  useEffect(() => {
    if (genreName === '/') {
      setUrls(moviesUrl);
      return;
    }
    if (genresCode !== 0) {
      setUrls(moviesByGenre);
    }
  }, [genreName]);

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
          <When
            expr={listMovies !== undefined && listMovies?.results.length > 0}
          >
            {listMovies?.results.map((movie: IMovieData) => (
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
