import { chakra } from '@chakra-ui/react';
import { MovieCard } from '../MovieCard';

import { useEffect, useState, useRef, Fragment } from 'react';
import { IPropsMovieList } from '../../types/ApiType';
import { IMovieData } from '../../types/ApiReturn';
import { Loading } from '../helpers/loading';
import { useContextCreate } from '../../hooks/useContextCreate';
type IWait = boolean;

export const MoviesList = ({ data, loading }: IPropsMovieList) => {
  const [limitRender, SetLimitRender] = useState(6);
  const [count, setCount] = useState(1);
  const [infinite, setInfinite] = useState(false);
  const [wait, setWait] = useState<IWait>(false);
  const [load, setLoad] = useState(true);
  const observer = useRef<HTMLDivElement | null>(null);

  const { opacityEl, setStyleOfOpacity, setStyleHome } = useContextCreate();

  useEffect(() => {
    if (data !== null && limitRender >= data.length) {
      setInfinite(false);
      setLoad(false);
    }
  }, [limitRender, data, infinite]);

  useEffect(() => {
    if (loading === true) {
      setStyleOfOpacity('1');
      setStyleHome('0');
    } else {
      setStyleOfOpacity('0');
      setStyleHome('1');
    }
  }, [loading]);
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
              setLoad(false);
            }, 500);
          }
        }
      }
    });
    if (observer.current != null) intersectOb.observe(observer.current);

    return () => intersectOb.disconnect();
  }, [limitRender, count, data, infinite, wait]);

  if (loading === true)
    return (
      <Loading
        positions="absolute"
        Height="100vh"
        text="carregando..."
        OpacityEl={opacityEl}
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
            index < limitRender ? (
              <MovieCard dataMovie={movie} key={movie.id + index} />
            ) : (
              <Fragment key={movie.id + index}></Fragment>
            )
          )}
        </chakra.ul>
        {load && <Loading refs={observer} positions="static" Height="auto" />}
      </>
    );
  else return null;
};
