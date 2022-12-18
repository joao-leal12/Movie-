import { chakra } from '@chakra-ui/react';
import { MovieCard } from '../MovieCard';
import { GET_MOVIES } from '../../utils/API/API_ROUTES';
import { useEffect, useState, useRef, Fragment } from 'react';
import { UseFetch } from '../../hooks/UseFetch';
import { IMovieData } from '../../types/ApiReturn';

export const MoviesList = () => {
  const { request, loading } = UseFetch();
  const [data, setData] = useState<IMovieData[] | null>(null);
  const [limitRender, SetLimitRender] = useState(6);
  const [count, setCount] = useState(1);
  const [infinite, setInfinite] = useState(true);

  const observer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getMovieData = async () => {
      const { url } = GET_MOVIES(1);
      const { results } = await request(url);

      setData(results);
    };

    void getMovieData();
  }, []);
  useEffect(() => {
    if (data !== null && limitRender >= data.length) {
      setInfinite(false);
    }
  }, [limitRender, data, infinite]);
  useEffect(() => {
    const intersectOb = new IntersectionObserver((entries) => {
      // SetLimitRender((limitRender) => limitRender * count);
      if (data != null) {
        const limit = Math.floor(data.length / 6);
        const rest = data.length % 6;

        if (entries.some((entry) => entry.isIntersecting)) {
          if (count < limit && infinite) {
            setCount((Count) => Count + 1);
            SetLimitRender((limitRender) => limitRender + 6);
          } else if (infinite) {
            SetLimitRender((limitRender) => limitRender + rest);
          }
        }
      }
    });
    if (observer.current != null) intersectOb.observe(observer.current);

    return () => intersectOb.disconnect();
  }, [limitRender, count, data, infinite]);

  if (loading) return <p style={{ color: 'white' }}>Carregando caralho....</p>;
  if (data != null)
    return (
      <chakra.ul
        display="grid"
        gridTemplateColumns="repeat(3, 1fr) "
        justifyItems="center"
        gap="2.4rem"
      >
        {data.map((movie: IMovieData, index: number) =>
          index < limitRender ? (
            <MovieCard dataMovie={movie} key={movie.id + index} />
          ) : (
            <Fragment key={movie.id + index}></Fragment>
          )
        )}
        <div ref={observer} style={{ width: '100%', height: '90px' }}></div>
      </chakra.ul>
    );
  else return null;
};
