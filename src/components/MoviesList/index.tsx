import { chakra } from '@chakra-ui/react';
import { MovieCard } from '../MovieCard';
import { GET_MOVIES } from '../../utils/API/API_ROUTES';
import React, { useEffect, useState } from 'react';
import { UseFetch } from '../../hooks/UseFetch';
export const MoviesList = () => {
  const { url } = GET_MOVIES();
  const { request, loading } = UseFetch();
  const [data, setData] = useState<any>(null);
  const [rest, setRest] = useState(0);
  const [divider, setDivider] = useState(1);
  const controller = 6;

  useEffect(() => {
    const getMovieData = async () => {
      const { results } = await request(url);

      setData(results);
    };

    void getMovieData();
  }, []);

  useEffect(() => {
    function InfiniteScroll() {
      let wait = false;

      const scroll = scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if (scroll > height * 0.75 && !wait) {
        implementationScroll();
        wait = true;
        setInterval(() => {
          wait = false;
        }, 2000);
      }
    }
    function implementationScroll() {
      if (data != null) {
        const count = data.length / 6;
        const restStatic = data.length % 6;
        if (divider < Math.floor(count)) {
          setDivider(divider + 1);
        } else if (rest < restStatic) {
          setRest(rest + 1);
        }
      }
    }
    window.addEventListener('sroll', InfiniteScroll);
    window.addEventListener('wheel', InfiniteScroll);

    return () => {
      window.removeEventListener('scroll', InfiniteScroll);
      window.removeEventListener('wheel', InfiniteScroll);
    };
  }, [divider, rest, data]);
  if (loading) return <p style={{ color: 'white' }}>Carregando caralho....</p>;
  if (data != null)
    return (
      <chakra.ul
        display="grid"
        gridTemplateColumns="repeat(3, 1fr) "
        justifyItems="center"
        gap="2.4rem"
      >
        {data.map((movie: { id: number }, index: number) =>
          index < controller * divider + rest ? (
            <MovieCard dataMovie={movie} key={movie.id} />
          ) : (
            <React.Fragment key={movie.id}>
              <p>Carregando cacetinho</p>
            </React.Fragment>
          )
        )}
      </chakra.ul>
    );
  else return null;
};
