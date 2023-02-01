import { useEffect, useState, useRef } from 'react';
import { chakra } from '@chakra-ui/react';
import { GET_MOVIES } from '../../utils/API/API_ROUTES';
import { apiCall } from '../../lib/apiCall';

import { Loading } from '../helpers/loading';

import { IMovieData } from '../../types/ApiType';
import { RenderMoviesContainer } from '../RenderMoviesContainer';

export const MoviesList = () => {
  const [dataMovie, setDataMovie] = useState<IMovieData[]>([]);

  const [page, setPage] = useState<number[]>([1]);
  const observer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intersectOb = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPage([...page, page.length + 1]);
      }
    });
    if (observer.current != null) intersectOb.observe(observer.current);

    return () => {
      intersectOb.disconnect();
    };
  }, [page]);

  // useEffect(() => {
  //   console.log(observer);
  // }, [observer]);

  useEffect(() => {
    const { url } = GET_MOVIES(page.length);
    const controller = new AbortController();
    apiCall
      .get(url, {
        signal: controller.signal,
      })
      .then((response) => {
        setDataMovie(response.data.results);
      });

    return () => controller.abort();
  }, [page]);

  if (dataMovie != null)
    return (
      <>
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
          {page.map((p) => (
            <RenderMoviesContainer key={p} data={dataMovie} />
          ))}
        </chakra.ul>
        <Loading refs={observer} />
      </>
    );
  else return null;
};
