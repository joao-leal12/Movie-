import { chakra } from '@chakra-ui/react';
import { MovieCard } from '../MovieCard';
import { useEffect } from 'react';
import { UseFetch } from '../../hooks/UseFetch';
import { GET_MOVIES } from '../../utils/API/GET_MOVIES';
export const MoviesList = () => {
  const { data, loading, error, request } = UseFetch();
  const { url } = GET_MOVIES();
  useEffect(() => {
    void request(url);
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error != null) return <p>{error}</p>;
  if (data != null)
    return (
      <chakra.ul
        display="grid"
        gridTemplateColumns="repeat(3, 1fr) "
        justifyItems="center"
        gap="2.4rem"
      >
        {data.map((card: any) => (
          <MovieCard key={card.id} card={card} genre={card.genre_ids} />
        ))}
      </chakra.ul>
    );
  else return null;
};
