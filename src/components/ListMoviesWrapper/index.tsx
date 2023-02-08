import { useEffect, useRef } from 'react';
import { Grid, Flex } from '@chakra-ui/react';
import { IMovieData } from '../../types/ApiType';
import { useContextCreate } from '../../hooks/useContextCreate';
import { MovieCard } from '../MovieCard';
import { Loading } from '../helpers/loading';

interface IListMoviesProps {
  data: IMovieData[];
}
export const ListMoviesWrapper = ({ data = [] }: IListMoviesProps) => {
  const { inforGenres, page, setPage, isLoading } = useContextCreate();
  const LoadingWrapperObserve = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPage(page + 1);
      }
    });

    if (LoadingWrapperObserve.current !== null)
      intersectionObserver.observe(LoadingWrapperObserve.current);

    return () => intersectionObserver.disconnect();
  }, [page, data]);
  if (isLoading) return <Loading positions="absolute" />;
  if (data !== null)
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
        >
          {data.length > 0 &&
            data.map((movie) => (
              <MovieCard
                key={movie.id}
                inforGenres={inforGenres}
                dataMovie={movie}
              />
            ))}
        </Grid>
        {!isLoading && (
          <Flex as="div" ref={LoadingWrapperObserve}>
            <Loading />
          </Flex>
        )}
      </Flex>
    );
  else return null;
};
