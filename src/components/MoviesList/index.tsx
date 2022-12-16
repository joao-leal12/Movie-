import { chakra } from '@chakra-ui/react';
import { MovieCard } from '../MovieCard';
import { GET_MOVIES } from '../../utils/API/API_ROUTES';
import { useEffect, useState, useRef } from 'react';
import { UseFetch } from '../../hooks/UseFetch';
export const MoviesList = () => {
  const { request, loading } = UseFetch();
  const [data, setData] = useState<any>(null);
  const observer: any = useRef<HTMLElement>();
  useEffect(() => {
    const getMovieData = async () => {
      const { url } = GET_MOVIES(1);
      const { results } = await request(url);

      setData(results);
    };

    void getMovieData();
  }, []);

  useEffect(() => {
    const intersectOb = new IntersectionObserver(() => {
      console.log('Amigo, estou aqui');
    });
    if (observer.current != null) intersectOb.observe(observer.current);

    return () => intersectOb.disconnect();
  });

  if (loading) return <p style={{ color: 'white' }}>Carregando caralho....</p>;
  if (data != null)
    return (
      <chakra.ul
        display="grid"
        gridTemplateColumns="repeat(3, 1fr) "
        justifyItems="center"
        gap="2.4rem"
      >
        {data.map((movie: { id: number }, index: number) => (
          <MovieCard dataMovie={movie} key={movie.id + index} />
        ))}
        <div ref={observer} style={{ width: '100%', height: '90px' }}></div>
      </chakra.ul>
    );
  else return null;
};
