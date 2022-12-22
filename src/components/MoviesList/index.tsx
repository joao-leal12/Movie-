import { chakra } from '@chakra-ui/react';
import { MovieCard } from '../MovieCard';

import { useEffect, useState, useRef, Fragment } from 'react';
import { IPropsMovieList } from '../../types/ApiType';
import { IMovieData } from '../../types/ApiReturn';
import { Loading } from '../helpers/loading';

type IWait = boolean;

export const MoviesList = ({ data, loading }: IPropsMovieList) => {
  const [limitRender, SetLimitRender] = useState(6);
  const [count, setCount] = useState(1);
  const [infinite, setInfinite] = useState(false);
  const [wait, setWait] = useState<IWait>(false);
  const observer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data !== null && limitRender >= data.length) {
      setInfinite(false);
    }
  }, [limitRender, data, infinite]);
  useEffect(() => {
    const intersectOb = new IntersectionObserver((entries) => {
      if (data != null) {
        const limit = Math.floor(data.length / 6);
        const rest = data.length % 6;

        setInfinite(true);

        if (entries.some((entry) => entry.isIntersecting)) {
          if (count < limit && infinite && !wait) {
            setWait(true);
            setTimeout(() => {
              setWait(false);
              setCount((Count) => Count + 1);
              SetLimitRender((limitRender) => limitRender + 6);
            }, 500);
          } else if (infinite && count >= limit) {
            setWait(true);
            setTimeout(() => {
              setWait(false);
              SetLimitRender((limitRender) => limitRender + rest);
            }, 500);
          }
        }
      }
    });
    if (observer.current != null) intersectOb.observe(observer.current);

    return () => intersectOb.disconnect();
  }, [limitRender, count, data, infinite, wait]);

  if (loading === true) return <Loading loading={loading} />;
  if (data != null)
    return (
      <chakra.ul
        display="grid"
        gridTemplateColumns="repeat(3, 1fr) "
        justifyItems="center"
        gap="2.4rem"
      >
        {/* {data !== null && data.map(movie : IMovieData, index)} */}

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
