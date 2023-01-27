import { chakra } from '@chakra-ui/react';
import { useEffect, useState, useRef, Fragment } from 'react';

import { IPropsMovieList, IMovieData } from '../../types/ApiType';
import { useContextCreate } from '../../hooks/useContextCreate';

import { Loading } from '../helpers/loading';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ data, loading }: IPropsMovieList) => {
  const [renderCards, setRenderCards] = useState<IMovieData[]>([]);

  const { inforGenres, count } = useContextCreate();
  const observer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data.length === 0) return;
    setRenderCards((prev) => [...prev, data]);
    console.log(renderCards);
  }, [data]);

  useEffect(() => {
    const intersectOb = new IntersectionObserver((entries) => {});
    if (observer.current != null) intersectOb.observe(observer.current);

    return () => {
      intersectOb.disconnect();
    };
  }, [count, data]);

  if (loading === true)
    return (
      <Loading
        positions="absolute"
        Height="100vh"
        text="carregando..."
        loading={loading}
      />
    );
  if (data != null)
    return (
      <>
        <chakra.ul
          display="grid"
          gridTemplateColumns={[
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3,1fr)',
          ]}
          justifyItems="center"
          gap="2.4rem"
        >
          {data.map((movie: IMovieData, index: number) =>
            data.length > 0 ? (
              <MovieCard
                dataMovie={movie}
                key={movie.id + index}
                inforGenres={inforGenres}
              />
            ) : (
              <Fragment key={movie.id + index}></Fragment>
            )
          )}
        </chakra.ul>
        <Loading refs={observer} positions="relative" Height="auto" />
      </>
    );
  else return null;
};
