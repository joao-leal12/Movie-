import { chakra } from '@chakra-ui/react';
import { MovieCard } from '../MovieCard';
import { GET_MOVIES } from '../../utils/API/API_ROUTES';
import { useEffect, useState } from 'react';
import { UseFetch } from '../../hooks/UseFetch';

export const MoviesList = () => {
  const { url } = GET_MOVIES();
  const { request, loading } = UseFetch();
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const getMovieData = async () => {
      const { results } = await request(url);

      setData(results);
      console.log(data);
    };

    void getMovieData();
  }, []);
  if (loading) return <p style={{ color: 'white' }}>Carregando caralho..</p>;
  if (data != null)
    return (
      <chakra.ul
        display="grid"
        gridTemplateColumns="repeat(3, 1fr) "
        justifyItems="center"
        gap="2.4rem"
      >
        {data.map((movie: { id: any }) => (
          <MovieCard dataMovie={data} key={movie.id} />
        ))}
      </chakra.ul>
    );
  else return null;
};
