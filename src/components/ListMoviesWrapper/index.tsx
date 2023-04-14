import { Grid, Flex } from '@chakra-ui/react';

import { useContextCreate } from '../../hooks/useContextCreate';
import { MovieCard } from '../MovieCard';
import { Loading } from '../helpers/loading';

export const ListMoviesWrapper = () => {
  const { genres, isLoading, listMovies } = useContextCreate();

  if (isLoading) return <Loading positions="absolute" />;
  if (listMovies !== null)
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
          {listMovies !== undefined &&
            listMovies?.length > 0 &&
            listMovies?.map((movie) => (
              <MovieCard
                key={movie.id}
                inforGenres={genres?.genres}
                dataMovie={movie}
              />
            ))}
        </Grid>
        {/* {!isLoading && (
          <Flex as="div" ref={LoadingWrapperObserve}>
            <Loading />
          </Flex>
        )} */}
      </Flex>
    );
  else return null;
};
